// src/pages/api/auth.ts
// OAuth handler для Decap CMS + GitHub

export async function GET({ request }: { request: Request }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  const CLIENT_ID     = import.meta.env.GITHUB_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.GITHUB_CLIENT_SECRET;

  if (!code) {
    // Шаг 1: редирект на GitHub для авторизации
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      scope: 'repo,user',
      redirect_uri: `${url.origin}/api/auth`,
    });
    return Response.redirect(
      `https://github.com/login/oauth/authorize?${params}`,
      302
    );
  }

  // Шаг 2: обмен code на token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id:     CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenRes.json();
  const token = tokenData.access_token;

  if (!token) {
    return new Response('Ошибка авторизации', { status: 400 });
  }

  // Шаг 3: возвращаем токен в CMS через postMessage
  const html = `
<!DOCTYPE html>
<html>
<head><title>Авторизация</title></head>
<body>
<script>
  const token = ${JSON.stringify(token)};
  const message = JSON.stringify({
    token,
    provider: 'github'
  });
  if (window.opener) {
    window.opener.postMessage(
      'authorization:github:success:' + message,
      '*'
    );
  }
  window.close();
</script>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}

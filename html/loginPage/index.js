const getAuthUrl = () => {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: "http://localhost:1000/api/auth/google",
    client_id: "461680850023-2ot0ns044je1sc7j7gi01nie09jfsghh.apps.googleusercontent.com",
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ].join(" "),
  };
  const qs = new URLSearchParams(options)
  return `${rootUrl}?${qs.toString()}`
}

const googleAuth = document.getElementById('google')
googleAuth.href=getAuthUrl();
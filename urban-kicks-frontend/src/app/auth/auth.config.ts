export const authConfig = {
  authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_VuVX3Pv5a',
  client_id: '7g1pk0kvuigi2ftb3bq3f18u5n',
  redirect_uri: 'http://localhost:4200/',
  post_logout_redirect_uri: 'http://localhost:4200/',
  responseType: 'code',
  scope: 'openid email phone'
};
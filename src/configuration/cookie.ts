// eslint-disable-next-line import/no-anonymous-default-export
export default {
  NAME: process.env.REACT_APP_COOKIE_NAME
    ? String(process.env.REACT_APP_COOKIE_NAME)
    : 'auth_token',
  DOMAIN: process.env.REACT_APP_COOKIE_DOMAIN ? String(process.env.REACT_APP_COOKIE_DOMAIN) : '',
  SECURE: process.env.REACT_APP_COOKIE_SECURE
    ? process.env.REACT_APP_COOKIE_SECURE === '1' ||
      process.env.REACT_APP_COOKIE_SECURE.toUpperCase() === 'TRUE'
    : false,
  DURATION: process.env.REACT_APP_COOKIE_DURATION
    ? parseInt(process.env.REACT_APP_COOKIE_DURATION, 10)
    : 7,
}

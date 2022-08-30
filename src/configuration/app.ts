// eslint-disable-next-line import/no-anonymous-default-export
export default {
  APP_ENV: process.env.REACT_APP_APP_ENV ? String(process.env.REACT_APP_APP_ENV) : 'production',
  APP_URL: process.env.REACT_APP_APP_URL ? String(process.env.REACT_APP_APP_URL) : '',
  PUBLIC_URL: process.env.REACT_APP_PUBLIC_URL ? String(process.env.REACT_APP_PUBLIC_URL) : '',
  BACKEND_URL: process.env.REACT_APP_BACKEND_URL ? String(process.env.REACT_APP_BACKEND_URL) : '',
  GTM_ID: process.env.REACT_APP_GTM_ID ? String(process.env.REACT_APP_GTM_ID) : '',
  PRE_REGISTER: process.env.REACT_APP_PRE_REGISTER
    ? ['true', '1'].includes(String(process.env.REACT_APP_PRE_REGISTER))
    : false,
}

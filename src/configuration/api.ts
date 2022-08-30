// eslint-disable-next-line import/no-anonymous-default-export
export default {
  url: process.env.REACT_APP_API_URL,
  urlGraphQL: `${process.env.REACT_APP_API_URL}/graphql`,
  BASIC_AUTH: null,
  DEBUG: Number(process.env.REACT_APP_API_DEBUG) === 1,
  UPLOAD_ENDPOINT: `${process.env.REACT_APP_API_URL}/upload`,
}

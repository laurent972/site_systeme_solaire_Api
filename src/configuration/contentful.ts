// eslint-disable-next-line import/no-anonymous-default-export
export default {
  urlGraphQL: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
  token: process.env.REACT_APP_CONTENTFUL_TOKEN,
}

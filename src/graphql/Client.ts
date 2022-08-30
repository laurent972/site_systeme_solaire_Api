import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, DefaultOptions } from '@apollo/client'
import { Event } from '@bugsnag/js'
import { onError } from '@apollo/client/link/error'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import fetch from 'cross-fetch'
import { sha256 } from 'crypto-hash'

import bugsnagClient from '../helpers/BugsnagHelpers'
import * as config from '../configuration'
import { contentful } from '../configuration'

const endPoint = config.api.urlGraphQL
const FILTERED_CATEGORIES = ['validation', 'authorization']

const errorLink = onError(({ graphQLErrors, networkError, operation, response }) => {
  if (bugsnagClient) {
    if (graphQLErrors) {
      const filteredErrors = graphQLErrors.filter(
        ({ extensions }) => !FILTERED_CATEGORIES.includes(extensions?.category)
      )

      filteredErrors.forEach(({ message, locations, path, ...additional }) => {
        const messageToSend = `[GraphQL error]: \
            Message: ${JSON.stringify(message)}, \
            Location: ${JSON.stringify(locations)}, \
            Path: ${JSON.stringify(path)}, \
            Additional: ${JSON.stringify(additional)}`

        if (config.app.APP_ENV === 'local') {
          console.error(messageToSend)
        }
        bugsnagClient?.notify(new Error(messageToSend), (event: Event) => {
          event.severity = 'error'
          event.context = 'graphQLErrors'
          event.addMetadata('metaData', {
            Message: message,
            Location: locations,
            Path: path,
            Operation: operation,
            Response: response,
            Additional: additional,
          })
        })
      })
    }
    if (networkError) {
      if (config.app.APP_ENV === 'local') {
        console.error(`[Network error]: ${networkError}`)
      }
      bugsnagClient?.notify(new Error(`[Network error]: ${networkError}`), (event: Event) => {
        event.severity = 'error'
        event.context = 'graphQLErrors'
        event.addMetadata('metaData', {
          Operation: operation,
          Response: response,
        })
      })
    }
  }
})

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const httpLink = new HttpLink({ uri: endPoint, fetch })
const persistedLink = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true,
})

export const persistedClient = new ApolloClient({
  link: ApolloLink.from([persistedLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
  name: 'Apollo Persisted Client',
})

const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  name: 'Apollo Client',
  queryDeduplication: false,
  defaultOptions,
})

const contentfulHttpLink = new HttpLink({
  uri: contentful.urlGraphQL,
  fetch,
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${contentful.token}`,
  },
})

export const contentfulClient = new ApolloClient({
  link: ApolloLink.from([errorLink, contentfulHttpLink]),
  cache: new InMemoryCache(),
  queryDeduplication: false,
  defaultOptions,
})

export const defaultConfig = {
  fetchPolicy: 'no-cache',
  errorPolicy: 'all',
}

export default apolloClient

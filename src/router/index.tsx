import { generatePath } from 'react-router-dom'

export const router = (route: string, options?: { [key: string]: string }): string => {
  return generatePath(route, options)
}

export const routesPath = {
  home: '/',
  planet: '/:id',
}

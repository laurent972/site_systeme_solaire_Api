import Cookies from 'js-cookie'

import { cookie } from '../configuration'

export type AuthCookieType = {
  token: string
  impersonate?: boolean
}

export function setAuthCookie(value: AuthCookieType) {
  const v = JSON.stringify(value)
  Cookies.set(cookie.NAME, v, {
    path: '/',
    domain: cookie.DOMAIN,
    secure: cookie.SECURE,
    expires: cookie.DURATION,
  })
}

export function getAuthCookie(): AuthCookieType | null {
  const c = Cookies.get(cookie.NAME)
  if (c) {
    try {
      return JSON.parse(c) as AuthCookieType
    } catch (e) {
      console.log('Error parsing Cookie', e)
    }
  }
  return null
}

export function removeAuthCookie() {
  Cookies.remove(cookie.NAME, {
    path: '/',
    domain: cookie.DOMAIN,
    secure: cookie.SECURE,
  })
}

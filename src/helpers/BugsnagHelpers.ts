import Bugsnag from '@bugsnag/js'

import * as config from '../configuration'

const browserIgnoreErrors = [
  /^No error$/,
  /__show__deepen/,
  /Access is denied/,
  /anonymous function: captureException/,
  /Blocked a frame with origin/,
  /console is not defined/,
  /DataCloneError/,
  /event is not defined/,
  /feedConf/,
  /MyIPhoneApp/,
  /snapchat.com/,
  /vid_mate_check is not defined/,
  /win\.document\.body/,
  /window\._sharedData\.entry_data/,
  /ztePageScrollModule/,
  // React specific
  /Cannot read property 'className' of undefined/,
  /Permission denied to access property "apply"/,
  /Failed to register a ServiceWorker/,
]

const productionDisableCallback = (callback: () => void) => {
  if (config.app.APP_ENV !== 'production') {
    callback()
  }
}

const bugsnagLoggerPrefix = `[bugsnag:${config.app.APP_ENV}]: `

const bugsnagLogger = {
  debug: (e: any) => productionDisableCallback(() => console.debug(`${bugsnagLoggerPrefix}${e}`)),
  info: (e: any) => productionDisableCallback(() => console.info(`${bugsnagLoggerPrefix}${e}`)),
  warn: (e: any) => productionDisableCallback(() => console.warn(`${bugsnagLoggerPrefix}${e}`)),
  error: (e: any) => productionDisableCallback(() => console.error(`${bugsnagLoggerPrefix}${e}`)),
}

const exported = config.bugsnag.BUGSNAG_API_KEY
  ? Bugsnag.start({
      apiKey: config.bugsnag.BUGSNAG_API_KEY,
      appType: (process as any).browser ? 'browser' : 'node',
      logger: bugsnagLogger,
      releaseStage: config.app.APP_ENV,
      onError: (event) => {
        if (
          browserIgnoreErrors.some((ignoreError) => ignoreError.test(event.errors[0].errorMessage))
        ) {
          return false
        }
      },
    })
  : null

export default exported

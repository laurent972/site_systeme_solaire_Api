import { StringSchema as StringSchemaO, StringSchemaConstructor } from 'yup'

declare module 'yup' {
  interface StringSchema {
    siret(message?: string | ((p: any) => string)): StringSchemaO
    iban(message?: string | ((p: any) => string)): StringSchemaO
  }
}

export const date: StringSchemaConstructor

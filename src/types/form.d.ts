import { FC, ReactNode } from 'react'

export type FormFieldConfig = {
  name: string
  Component?: FC | FC<any>
  validation?: any
  required?: boolean
  conditional?: boolean
  defaultValue?: any
  [key: string]: any
}

export type FormFieldOption = {
  value: string
  label: string
  [key: string]: any
}

export type FormFieldProps = {
  label?: string | ReactNode
  placeholder?: string
  select?: boolean
  options?: FormFieldOption[]
  [key: string]: any
}

export type FormFieldsProps = {
  [key: string]: FormFieldProps
}

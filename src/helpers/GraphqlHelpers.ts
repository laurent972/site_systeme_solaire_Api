export type GraphqlError = {
  label?: string
  field?: string
}
export type GraphqlErrors = GraphqlError[]

const transformError = (error: any): GraphqlError => {
  if (error?.extensions?.category === 'validation') {
    const validation = error?.extensions[error?.extensions?.category]

    return Object.keys(validation).reduce(
      (r, v) => ({
        field: v.replace('input.', ''),
        label: validation[v][0],
      }),
      {}
    )
  }

  if (error?.message) {
    return {
      label: error.message,
    }
  }

  return {}
}

export const transformErrors = (errors: any): GraphqlErrors =>
  (errors && Array.isArray(errors) && errors.map(transformError)?.filter((e) => !!e.label)) || []

export const enumOption = (
  t: any,
  name: string,
  value: string
): { label: string; value: string } => ({
  label: t(`enum_${name}_${value}`),
  value,
})

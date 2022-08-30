import React from 'react'

import { UserType } from '../generated/graphql'

export type RestrictedReactFC<T> = React.FC<T> & { restrictedUserTypes?: UserType[] }

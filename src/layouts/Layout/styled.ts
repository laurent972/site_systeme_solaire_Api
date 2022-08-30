import styled from 'styled-components'
import { Container as MuiContainer } from '@material-ui/core'

export const Container = styled(MuiContainer)`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  background: bottom center / cover no-repeat;
  background-color: ${(props) => props.theme.palette.colors.whiteSmoke};
  padding-left: 0;
  padding-right: 0;
  ${(props) => props.theme.breakpoints.up('md')} {
    max-width: none;
  }
`

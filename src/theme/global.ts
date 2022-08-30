import { createGlobalStyle } from 'styled-components'
// import { GlobalStyleProps } from "../types/styles";

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: ${(props) => props.theme.palette.background.default};
  }

  .MuiCardHeader-action .MuiIconButton-root {
    padding: 4px;
    width: 28px;
    height: 28px;
  }
  
  .hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV.hMxmxV {
    transform: scale(0.6)!important;
    left: 0!important;
    ${(props) => props.theme.breakpoints.up('md')} {
        left: 5px!important;
        transform: scale(0.8)!important;
      }
  }
`

import styled from 'styled-components'

export const Svg = styled.svg<{ color: string }>`
  color: ${(props) => props.color} !important;
  fill: ${(props) => props.color} !important;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

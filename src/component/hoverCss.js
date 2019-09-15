import { css } from 'styled-components'

export const hoverCss =  css`
    transition:all 0.3s ease;
  &:hover{
    background-color: #f1f3f5;
    transform: scale(0.99, 0.99);
  }
`;

export default hoverCss;

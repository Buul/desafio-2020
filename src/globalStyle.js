import { createGlobalStyle } from 'styled-components';
import ds from './designSystem';

export default createGlobalStyle`
  body {
    display: flex;
    font-family: ${ds.get('type.fontFamily.sans')};
    font-size: ${ds.get('type.baseFontSize')};
    width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
`;

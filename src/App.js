import React from 'react';
import GlobalStyle from './globalStyle';
import Main from 'components/Templates/Main';
import ThemeProvider from './theme';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </>
);

export default App;

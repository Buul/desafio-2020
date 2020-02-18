import React from 'react';
import { node } from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';

const AppProvider = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#00ACAB',
        main: '#00ACAB',
        dark: '#00ACAB',
        contrastText: '#fff',
      },
      secondary: {
        main: '#fff',
      },
      error: red,
    },
    typography: {
      useNextVariants: true,
      headline: {
        fontSize: '1rem',
      },
      subheading: {
        fontSize: '0.8125rem',
      },
      button: {
        fontWeight: 400,
        textTransform: 'initial',
      },
    },
    shape: {
      borderRadius: 4,
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

AppProvider.propTypes = {
  children: node.isRequired,
};

export default AppProvider;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from './Container';
import InputSearch from 'components/Molecules/InputSearch';
import Menu from 'components/Molecules/Menu';

const Header = ({ theme }) => (
  <Container theme={theme}>
    <Typography variant="h6" color={theme === 'default' ? 'secondary' : 'primary'}>
      CENTRAL DE AJUDA
    </Typography>
    <Typography variant="subtitle1" color={theme === 'default' ? 'secondary' : 'primary'}>
      COMO PODEMOS AJUDAR ?
    </Typography>
    <InputSearch theme={theme} />
    <Menu theme={theme} />
  </Container>
);

export default Header;

import React, { useState } from 'react';
import { arrayOf, shape } from 'prop-types';
import { Container } from './Container';
import { MenuItem } from './MenuItem';

const Menu = ({ listMenu, theme }) => {
  const [selected, setSelected] = useState('advertiser');

  return (
    <Container>
      {listMenu.map((item) => (
        <MenuItem
          theme={theme}
          key={item.id}
          id={item.id}
          onClick={() => {
            setSelected(item.id);
          }}
          selected={item.id === selected}
        >
          {item.label}
        </MenuItem>
      ))}
    </Container>
  );
};

Menu.propTypes = {
  listMenu: arrayOf(shape({})),
};

Menu.defaultProps = {
  listMenu: [
    {
      id: 'advertiser',
      label: 'Anunciante',
    },
    {
      id: 'exhibitor',
      label: 'Exibidor',
    },
    {
      id: 'agency',
      label: 'Agência',
    },
    {
      id: 'office',
      label: 'Escritório',
    },
  ],
};

export default Menu;

import styled from 'styled-components';
import ds from 'design';
import { pxToRem } from 'helpers/scales/converter';

const menuSelectedBorder = (theme) => `${pxToRem(4)} solid ${ds.color('menuItemBorder', theme)}`;
const menuBorder = `${pxToRem(4)} solid transparent`;

export const MenuItem = styled.div`
  color: ${(props) =>
    props.selected
      ? ds.color('menuItemColorSelected', props.theme)
      : ds.color('menuItemColor', props.theme)};
  cursor: pointer;
  padding-bottom: ${pxToRem(ds.spacing(3))};
  border-bottom: ${(props) => (props.selected ? menuSelectedBorder(props.theme) : menuBorder)};
`;

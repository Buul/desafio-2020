import styled from 'styled-components';
import ds from 'design';
import { pxToRem } from 'helpers/scales/converter';

export const Container = styled.div`
  background-color: ${(props) => ds.color('backgroundTheme', props.theme)};
  display: flex;
  flex-direction: column;
  padding: ${pxToRem(ds.spacing(7))} ${pxToRem(ds.spacing(6))} 0;
  width: 100%;

  h6 {
    margin-bottom: ${pxToRem(ds.spacing(3))};
    :first-child {
      margin-bottom: ${pxToRem(ds.spacing(4))};
    }
  }

  @media ${ds.get('device.s')} {
    padding: ${pxToRem(ds.spacing(6))} ${pxToRem(ds.spacing(4))};
  }
`;

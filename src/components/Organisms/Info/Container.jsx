import styled from 'styled-components';
import ds from 'design';
import { pxToRem } from 'helpers/scales/converter';

export const Container = styled.div`
  display: flex;
  padding: ${pxToRem(ds.spacing(7))} ${pxToRem(ds.spacing(6))};

  div:not(:last-child) {
    margin-right: ${pxToRem(ds.spacing(8))};
  }

  a {
    color: ${ds.color('pink')};
    margin-top: ${pxToRem(ds.spacing(2))};
  }

  @media ${ds.get('device.s')} {
    flex-direction: column;
    padding: ${pxToRem(ds.spacing(6))} ${pxToRem(ds.spacing(4))};

    div:not(:last-child) {
      margin-right: 0;
    }
  }
`;

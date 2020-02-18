import styled from 'styled-components';
import ds from 'design';
import { pxToRem } from 'helpers/scales/converter';

export const Container = styled.div`
  background-color: transparent;
  display: flex;

  div:not(:last-child) {
    margin-right: ${pxToRem(ds.spacing(6))};
  }

  @media ${ds.get('device.s')} {
    align-items: center;
    flex-direction: column;

    div:not(:last-child) {
      margin-right: 0;
      margin-bottom: ${pxToRem(ds.spacing(4))};
    }
  }
`;

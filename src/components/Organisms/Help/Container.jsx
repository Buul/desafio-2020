import styled from 'styled-components';
import ds from 'design';
import { pxToRem } from 'helpers/scales/converter';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${pxToRem(ds.spacing(6))} ${pxToRem(ds.spacing(6))};
  width: 100%;

  h6 {
    margin-bottom: ${pxToRem(ds.spacing(3))};
  }

  @media ${ds.get('device.s')} {
    padding: 0 ${pxToRem(ds.spacing(4))} ${pxToRem(ds.spacing(6))};
  }
`;

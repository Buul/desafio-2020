import styled from 'styled-components';
import ds from 'design';
import { pxToRem } from 'helpers/scales/converter';

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;

  img {
    height: ${pxToRem(100)};
    margin-bottom: ${pxToRem(ds.spacing(5))};
    width: ${pxToRem(100)};
  }

  @media ${ds.get('device.s')} {
    align-items: center;
    width: 100%;

    p {
      text-align: center;
    }

    margin-bottom: ${pxToRem(ds.spacing(7))};
  }
`;

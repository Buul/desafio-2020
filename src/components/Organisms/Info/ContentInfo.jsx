import styled from 'styled-components';
import ds from 'design';
import { pxToRem } from 'helpers/scales/converter';

export const ContentInfo = styled.div`
  min-height: ${pxToRem(120)};
  width: 100%;

  p {
    line-height: 1;
    margin-top: ${pxToRem(ds.spacing(3))};
    opacity: 0.5;
  }

  @media ${ds.get('device.s')} {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0 ${pxToRem(ds.spacing(4))};
  }
`;

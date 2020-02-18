import { getNumCharacterFromString } from '../format/string';
import ds from 'design';

export const pxToRem = (px) => `${px / getNumCharacterFromString(ds.get('type.baseFontSize'))}rem`;

export default pxToRem;

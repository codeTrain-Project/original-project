import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 375;
const scaleSize = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const HORIZONTAL_WHITE_SPACE = scaleSize(25);
export const SCALE_16 = scaleSize(16);
export const SCALE_12 = scaleSize(12);
export const SCALE_8 = scaleSize(8);

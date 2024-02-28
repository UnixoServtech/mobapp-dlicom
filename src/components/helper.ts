import {theme} from '../theme';
import _ from 'lodash';

const weights = [
  '400',
  '600',
  '700',
  'normal',
  'bold',
  '100',
  '200',
  '300',
  '500',
  '800',
  '900',
];

export function computeFontSize(size: IFontSize | number | undefined) {
  if (typeof size === 'number') {
    return size;
  } else if (typeof size === 'string' && theme?.typography?.fontSizes[size]) {
    return theme.typography.fontSizes[size];
  } else {
    return null;
  }
}

export function computeFontLineHeight(
  lineHeight: IFontLineHeight | number | undefined,
) {
  if (typeof lineHeight === 'number') {
    return lineHeight;
  } else if (
    typeof lineHeight === 'string' &&
    theme?.typography?.lineHeights[lineHeight]
  ) {
    return theme.typography.lineHeights[lineHeight];
  } else {
    return null;
  }
}

export function computeFontWeight(
  fontWeight: IFontWeightKeys | string | undefined,
) {
  if (typeof fontWeight === 'string' && weights?.includes(fontWeight)) {
    return fontWeight;
  } else if (
    typeof fontWeight === 'string' &&
    theme?.typography?.fontWeights[fontWeight as IFontWeight]
  ) {
    return theme?.typography?.fontWeights[fontWeight as IFontWeight];
  } else if (
    typeof fontWeight === 'number' &&
    weights?.includes(String(fontWeight))
  ) {
    return String(fontWeight);
  } else {
    return null;
  }
}

export function computeFontFamily(fontFamily: IFonts | string | undefined) {
  if (
    typeof fontFamily === 'string' &&
    theme.typography.fonts[fontFamily as IFonts]
  ) {
    return theme.typography.fonts[fontFamily as IFonts];
  } else if (typeof fontFamily === 'string') {
    return fontFamily;
  } else {
    return null;
  }
}

export const hex2rgba = (hex: any, alpha = 1) => {
  const hexRegex = /^#([\da-f]{3}){1,2}$/i;
  const rgbRegex =
    /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;

  if (hexRegex.test(hex)) {
    const [r, g, b] = hex.match(/\w\w/g).map((x: any) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  } else if (rgbRegex.test(hex)) {
    let newColor = hex.replace(/rgb/i, 'rgba');
    newColor = newColor.replace(/\)/i, `,${alpha})`);
    return newColor;
  } else {
    return hex;
  }
};


export function computeSize(size: string, type?: any) {
  if (typeof size === 'number') {
    return size;
  } else if (typeof size === 'string' && (size as string)?.includes('%')) {
    return size;
  } else if (typeof size === 'string') {
    return typeof type !== 'undefined' &&
      typeof theme?.sizes?.[type] === 'object'
      ? theme?.sizes?.[type]?.[size] ?? Number(size)
      : theme?.sizes?.[size] ?? Number(size);
  } else {
    return null;
  }
}

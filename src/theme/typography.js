import {widthPercentageToDP as wp} from '../utils/ResponsiveSize';

const fontWeights = {
  normal: '400',
  semibold: '600',
  medium: '500',
  bold: '700',
  light: '300',
  thin: '100',
};

const fonts = {
  interBlack: 'Inter-Black',
  interBold: 'Inter-Bold',
  interExtraBold: 'Inter-ExtraBold',
  interExtraLight: 'Inter-ExtraLight',
  interLight: 'Inter-Light',
  interMedium: 'Inter-Medium',
  interRegular: 'Inter-Regular',
  interSemiBold: 'Inter-SemiBold',
  interThin: 'Inter-Thin',
  amikoBold: 'Amiko-Bold',
  amikoRegular: 'Amiko-Regular',
  amikoSemiBold: 'Amiko-SemiBold',
  archivoBold: 'Archivo-Bold',
  archivoMedium: 'Archivo-Medium',
  archivoRegular: 'Archivo-Regular',
  archivoSemiBold: 'Archivo-SemiBold',
  poppinsBold: 'Poppins-Bold',
  poppinsMedium: 'Poppins-Medium',
  poppinsRegular: 'Poppins-Regular',
  poppinsSemiBold: 'Poppins-SemiBold',
  urbanistBold: 'Urbanist-Bold',
  urbanistSemiBold: 'Urbanist-SemiBold',
  netflixSansRegular: 'NetflixSans-Regular',
  netflixSansMedium: 'NetflixSans-Medium',
  netflixSansBold: 'NetflixSans-Bold',
};

const lineHeights = {
  xs2: wp('4'), // 15
  xs: wp('4.6'), //18
  sm: wp('5'), //18
  md: wp('5.1'), //20,
  lg: wp('5.8'), //22
  xl: wp('6.2'), //25,
  xl2: wp('6.4'), //25,
  xl3: wp('7'), //27,
  xl4: wp('7.6'), //30,
  xl5: wp('8.7'), //34,
  xl6: wp('9.6'), //37.5
  xl7: wp('10.8'), //42
};

const fontSizes = {
  xxs: wp(2.3), // 8
  xs2: wp('2.5'), // 9
  xs: wp('3.2'), //12
  xss: wp('3.6'), //13
  sm: wp('3.9'), //14
  smm: wp('4.2'), //15
  md: wp('4.4'), //16
  lg: wp('4.6'), //18
  xl: wp('5.6'), //20
  xl2: wp('6.3'), //24
  xl3: wp('7'), //27
  xl4: wp('8'), //32
  xl5: wp('8.7'), //34
  xl6: wp('8.7'), //40
};

const fontStyles = {
  interRegular: {
    fontFamily: fonts.interRegular,
    fontWeight: fontWeights.normal,
  },
  interLight: {
    fontFamily: fonts.interLight,
    fontWeight: fontWeights.light,
  },
  interThin: {
    fontFamily: fonts.interThin,
    fontWeight: fontWeights.thin,
  },
  interBold: {
    fontFamily: fonts.interBold,
    fontWeight: fontWeights.bold,
  },
  amikoRegular: {
    fontFamily: fonts.amikoRegular,
    fontWeight: fontWeights.normal,
  },
  amikoBold: {
    fontFamily: fonts.amikoBold,
    fontWeight: fontWeights.bold,
  },
  amikoSemiBold: {
    fontFamily: fonts.amikoSemiBold,
    fontWeight: fontWeights.semibold,
  },
  archivoBold: {
    fontFamily: fonts.archivoBold,
    fontWeight: fontWeights.bold,
  },
  archivoSemiBold: {
    fontFamily: fonts.archivoSemiBold,
    fontWeight: fontWeights.semibold,
  },
  archivoRegular: {
    fontFamily: fonts.archivoRegular,
    fontWeight: fontWeights.normal,
  },
  archivoMedium: {
    fontFamily: fonts.archivoMedium,
    fontWeight: fontWeights.medium,
  },
  poppinsBold: {
    fontFamily: fonts.poppinsBold,
    fontWeight: fontWeights.bold,
  },
  poppinsMedium: {
    fontFamily: fonts.poppinsMedium,
    fontWeight: fontWeights.medium,
  },
  poppinsRegular: {
    fontFamily: fonts.poppinsRegular,
    fontWeight: fontWeights.normal,
  },
  poppinsSemiBold: {
    fontFamily: fonts.poppinsSemiBold,
    fontWeight: fontWeights.semibold,
  },
  urbanistBold: {
    fontFamily: fonts.urbanistBold,
    fontWeight: fontWeights.bold,
  },
  urbanistSemiBold: {
    fontFamily: fonts.urbanistSemiBold,
    fontWeight: fontWeights.semibold,
  },
  netflixSansBold: {
    fontFamily: fonts.netflixSansBold,
    fontWeight: fontWeights.semibold,
  },
  netflixSansMedium: {
    fontFamily: fonts.netflixSansMedium,
    fontWeight: fontWeights.medium,
  },
  netflixSansRegular: {
    fontFamily: fonts.netflixSansRegular,
    fontWeight: fontWeights.normal,
  },
};

const typography = {
  fontWeights,
  fonts,
  lineHeights,
  fontSizes,
  fontStyles,
};

export default typography;

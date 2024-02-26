import {widthPercentageToDP as wp} from '../utils/ResponsiveSize';

const typography = {
  fontWeights: {
    normal: '400',
    semibold: '600',
    medium: '500',
    bold: '700',
  },
  lineHeights: {
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
  },
  fontSizes: {
    xxs: wp(2.3), // 8
    xs2: wp('2.7'), // 10
    xs: wp('3.2'), //12
    sm: wp('3.6'), //14
    md: wp('4.1'), //16
    lg: wp('4.6'), //18
    xl: wp('5.1'), //20
    xl2: wp('6.4'), //25
    xl3: wp('7'), //27
    xl4: wp('8'), //32
    xl5: wp('8.7'), //34
    xl6: wp('8.7'), //40
  },
  fonts: {
    interBlack: 'Inter-Black',
    interBold: 'Inter-Bold',
    interExtraBold: 'Inter-ExtraBold',
    interExtraLight: 'Inter-ExtraLight',
    interLight: 'Inter-Light',
    interMedium: 'Inter-Medium',
    interRegular: 'Inter-Regular',
    interSemiBold: 'Inter-SemiBold',
    interThin: 'Inter-Thin',
  },
};

export default typography;

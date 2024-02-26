import {widthPercentageToDP as wp} from '../utils/ResponsiveSize';

const containers = {
  xs: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const image = {
  xs2: wp('2.7'), // 10
  xs: wp('3.2'), //12
  sm: wp('3.6'), //14
  md: wp('4.1'), //16
  lg: wp('4.6'), //18
  xl: wp('5.1'), //20
  xl2: wp('6.4'), //25
  xl3: wp('7.6'), //30
  xl4: wp('10.2'), //40
  xl5: wp('12.7'), //50
  xl6: wp('15.3'), //60
  xl7: wp('20.4'), //80
  xl8: wp('25.5'), //100
};

const icons = {
  xs2: wp('3.2'), //12
  xs: wp('3.6'), //14,
  sm: wp('4.1'), //16
  md: wp('4.6'), //18
  lg: wp('5.1'), //20,
  xl: wp('5.6'), //22,
  xl2: wp('6.3'), // 24
  xl3: wp('6.6'), // 26
  xl4: wp('7.1'), // 28
  xl5: wp('7.6'), // 30
  xl6: wp('8.2'), // 32
  xl7: wp('8.7'), // 34
  xl8: wp('9.2'), // 36
  xl9: wp('9.7'), // 38
  xl10: wp('10.2'), // 40
  xl11: wp('10.7'), // 42
  xl12: wp('11.2'), // 44
  xl13: wp('11.7'), // 46
  xl14: wp('12.2'), // 48
  xl15: wp('12.7'), // 50
};

const borders = {
  xs2: 2,
  xs: 3,
  sm: wp('2.1'), // 9
  md: wp('2.6'), // 10
  lg: wp('3.2'), // 12
  xl: wp('4.1'), //16
  xl2: wp('7.6'), // 30
};

const radius = {
  none: 0,
  rounded: 10,
  full: 9999,
  modalRadius: wp('2.7'), // 10
};

const spacing = {
  xs10: wp('2.7'), // 10
  xs2: 4,
  xs: 8,
  sm: 15,
  md: wp('4.6'), //18
  lg: 24,
  xl: 32,
  xl2: 40,
  xl3: wp('13.7'), // 54
  xl4: 92,
  ph: wp('5.1'), // 20
  pv: wp('5.1'), // 20
  tableRow: 54,
  tableHeader: 56,
  xl11: wp('9.2'), // 36
};

const sizes = {
  icons,
  spacing,
  containers,
  image,
  borders,
  radius,
  borderRadius: 10,
  borderWidth: 2,
  modalRadius: wp('2.7'),
  ...{
    xs3: 50,
    xl4: 60,
    xs2: 120,
    xs: 160,
    sm: 162,
    md: 164,
    lg: 196,
    xl: 325,
    xl2: 335,
    xl3: 375,
    xl13: wp('11.7'), // 46
    xl14: wp('5.6'), //22,
    xl15: wp('12.7'), // 50
    xl5: wp('7.6'), // 30,
    xl16: wp('14.9'), // 58
    x28: wp('7.1'), // 28
  },
};

export default sizes;

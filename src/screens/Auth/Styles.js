import {StyleSheet} from 'react-native';
import fonts from '../../assests/fonts';
import {colors} from '../../config/Colors';

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#191C4D60',
    alignItems: 'center',
  },

  textskip: {
    fontFamily: fonts.SitkaDisplay,
    color: colors.white,
    fontSize: 18,
  },

  textslide: {
    fontFamily: fonts.SitkaDisplay,
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
  },

  skipTouch: {
    position: 'absolute',
    right: 0,
    padding: 32,
    paddingHorizontal: 12,
  },

  slideTouch: {
    position: 'absolute',
    bottom: 150,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
});

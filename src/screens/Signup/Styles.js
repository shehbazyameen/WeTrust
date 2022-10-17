import {StyleSheet} from 'react-native';
import fonts from '../../assests/fonts';
import {colors} from '../../config/Colors';

export default StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWelcome: {
    fontFamily: fonts.SitkaDisplay,
    fontSize: 30,
    color: colors.primaryBlue,
  },
  textLoginYourAccount: {
    fontFamily: fonts.SitkaDisplay,
    fontSize: 14,
    color: colors.primaryBlue,
  },

  textSignWith: {
    fontFamily: fonts.SitkaDisplay,
    fontSize: 14,
    color: colors.primaryBlueOpacity50,
  },

  textSignhere: {
    fontFamily: fonts.SitkaDisplay,
    fontSize: 14,
    color: colors.textColor1,
    textDecorationLine: 'underline',
  },
});

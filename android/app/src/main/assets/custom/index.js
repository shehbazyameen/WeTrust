import {Platform} from 'react-native';

const fonts = {
  SitkaBanner: Platform.OS === 'ios' ? 'SitkaBanner' : 'SitkaBanner',
  SitkaDisplay: Platform.OS === 'ios' ? 'SitkaDisplay' : 'SitkaDisplay',
  SitkaHeading: Platform.OS === 'ios' ? 'SitkaHeading' : 'SitkaHeading',
  SitkaSmall: Platform.OS === 'ios' ? 'SitkaSmall' : 'SitkaSmall',
  SitkaSubheading:
    Platform.OS === 'ios' ? 'SitkaSubheading' : 'SitkaSubheading',
  SitkaDisplay: Platform.OS === 'ios' ? 'SitkaText' : 'SitkaText',

  LatoBold: Platform.OS === 'ios' ? '  Lato-Bold' : '  Lato-Bold',
};

export default fonts;

import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorSecondary,
  },
  textNo: {
    fontSize: 16,
    fontWeight: '700',
    opacity: 0.6,
  },
});

export default styles;

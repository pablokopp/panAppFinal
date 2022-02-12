import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 0.8 * theme.fullWidth,
    borderBottomColor: theme.colorPrimary,
    paddingVertical: 15,
    marginBottom: 30,
    borderBottomWidth: 3,
  },
  text1: {
    color: theme.colorPrimary,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 2,
  },
  text2: {
    color: theme.colorPrimary,
    fontSize: 16,
  },
});
export default styles;

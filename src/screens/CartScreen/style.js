import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorSecondary,
    padding: 30,
  },
  btnConfirm: {
    width: 0.7 * theme.fullWidth,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 6,
    backgroundColor: theme.colorPrimary,
  },
  text1: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18,
  },
  text2: {
    color: '#FFF',
    marginTop: 15,
    fontSize: 18,
  },
});

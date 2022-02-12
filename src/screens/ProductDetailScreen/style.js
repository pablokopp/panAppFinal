import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorSecondary,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerProd: {
    flex: 0.4,
    width: 0.8 * theme.fullWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colorPrimary,
    padding: 40,
    borderRadius: 6,
  },
  text1: {
    color: '#FFF',
    fontSize: 25,
    textTransform: 'uppercase',
    letterSpacing: 10,
    fontWeight: '700',
  },
  text2: {
    color: '#FFF',
    fontSize: 20,
    marginHorizontal: 20,
  },
  text3: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default styles;

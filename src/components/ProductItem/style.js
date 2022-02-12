import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 0.9 * theme.fullWidth,
    height: 0.1 * theme.fullHeight,
    borderRadius: 6,
    padding: 20,
    marginVertical: 15,
    backgroundColor: theme.colorPrimary,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text1: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  text2: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 20,
  },
});

export default styles;

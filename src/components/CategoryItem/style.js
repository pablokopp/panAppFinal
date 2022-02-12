import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTouchable: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 0.9 * theme.fullWidth,
    height: 0.2 * theme.fullHeight,
    borderRadius: 6,
    elevation: 5,
    padding: 10,
    marginVertical: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFF',
  },
});

export default styles;

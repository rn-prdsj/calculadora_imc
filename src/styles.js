import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  placeholder: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    alignItems: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#89ff',
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    padding: 20,
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 25,
    padding: 15,
  },
});

export default styles;

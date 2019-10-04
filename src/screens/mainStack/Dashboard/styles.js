import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  board: {
    flex: 1,
    backgroundColor: '#63A2B8',
  },
  column: {
    width: 250,
    margin: 20,
    padding: 10,
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  columnHeader: {
    padding: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#3171E0',
    fontSize: 18,
  },
  item: {
    flex: 1,
    width: 218,
    margin: 5,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#63A2B8',
    borderRadius: 5,
  },
});

export default styles;

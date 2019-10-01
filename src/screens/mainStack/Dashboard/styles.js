import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  board: {
    flex: 1,
    padding: 15,
    backgroundColor: '#63A2B8',
  },
  column: {
    width: 250,
    margin: 10,
    padding: 10,
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  columnHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    alignSelf: 'center',
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

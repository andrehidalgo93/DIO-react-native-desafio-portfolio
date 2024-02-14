import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: "white",
    fontSize: 20,
    marginVertical: 20,
  },
  pressable: {
    borderWidth: 2,
    borderColor: "#53277E",
    borderRadius: 8,
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginRight: 5,
  },
  text: {
    color: "white",
    marginHorizontal: 8,
  }
});

export default styles;
import { StyleSheet, Text, View, Alert, Pressable, Vibration, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

const CustomButton = (props) => {
  const _onPressButtonWithParameter = (buttonName) => {
    Alert.alert(`${buttonName} Button Pressed`);
    Vibration.vibrate(150);
  }

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#a0372c' : '#c44536',
        },
        styles.pressableButton,
      ]}
      onPress={() => _onPressButtonWithParameter(props.name)}>
      <Text style={styles.pressableButtonText}>{props.name}</Text>
    </Pressable >
  );
}

const App = () => {

  createButton = (buttonName) => {
    return (<Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#a0372c' : '#c44536',
        },
        styles.pressableButton,
      ]}
      onPress={this._onPressButton}>
      <Text style={styles.pressableButtonText}>{buttonName}</Text>
    </Pressable>);
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style='auto' hidden={false}></StatusBar>
        <Text style={styles.titleMessage}>Elder Helper</Text>

        <View style={styles.pressableButtonContainer}>

          <CustomButton name="Radio"></CustomButton>
          <CustomButton name="Message"></CustomButton>
          <CustomButton name="Other"></CustomButton>

        </View>

      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ae2012',
    alignItems: 'center',
  },

  titleMessage: {
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 5,
    fontSize: 32,
    marginTop: 50,
  },

  pressableButtonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  pressableButton: {
    borderRadius: 4,
    paddingHorizontal: 60,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    elevation: 5,
  },

  pressableButtonText: {
    fontSize: 32,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});

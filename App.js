import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(0);

  const calculateTotalTime = () => {
    const newTotal = (parseInt(hours) || 0) * 3600 + (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0);
    setTotalTimeInSeconds(totalTimeInSeconds + newTotal);
    resetInputFields();
  };

  const resetTotalTime = () => {
    setTotalTimeInSeconds(0);
    resetInputFields();
  }

  const resetInputFields = () => {
    setHours('');
    setMinutes('');
    setSeconds('');
  }

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}:${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
    };

    return (
      <View style={styles.container}>
        <Text style={styles.result}>
          Time Calculator
        </Text>
        <TextInput
          style= {styles.input}
          keyboardType='numeric'
          placeholder='Hours'
          value={hours}
          onChangeText={setHours}
        />
        <TextInput
        style= {styles.input}
        keyboardType='numeric'
        placeholder='Minutes'
        value={minutes}
        onChangeText={setMinutes}
        />
       <TextInput
          style= {styles.input}
          keyboardType='numeric'
          placeholder='Seconds'
          value={seconds}
          onChangeText={setSeconds}
        />
        <Button title="Calculate" onPress={calculateTotalTime} />
        <Button title="Reset" onPress={resetTotalTime} color='red' />
        <Text style={styles.result}>
          Total Time: {formatTime(totalTimeInSeconds)}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    weight: '80%',
    borderColor: 'orange',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  result: {
    fontSize: 24,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
});

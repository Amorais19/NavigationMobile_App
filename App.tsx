import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { useFonts, IrishGrover_400Regular } from '@expo-google-fonts/irish-grover';

export default function App() {
  const [fontsLoaded] = useFonts({
    IrishGrover_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

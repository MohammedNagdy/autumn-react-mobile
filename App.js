import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import {HomeScreen} from './screens/Home';
import {SignupScreen} from './screens/Signup';
import {SignupSellerScreen} from './screens/SignupSeller';
import { ExploreScreen} from './screens/Explore';
import { LoginScreen } from './screens/Login';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen}/>
        <Stack.Screen name="SignupSeller" component={SignupSellerScreen}/>
        <Stack.Screen name="Explore" component={ExploreScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
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

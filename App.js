import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators, TransitionSpecs, TransitionPresets } from "@react-navigation/stack";


// Import screens
import { HomeScreen } from './screens/Home';
import { SignupScreen } from './screens/Signup';
import { SignupSellerScreen } from './screens/SignupSeller';
import { ExploreScreen } from './screens/Explore';
import { LoginScreen } from './screens/Login';
import { SuccessSellerScreen } from './screens/SuccessSeller';
import { RegisterScreen } from './screens/Register';
import { ProductScreen } from './screens/Product';
import { CheckoutScreen } from './screens/Checkout';

const Stack = createNativeStackNavigator()
 

// creating animations
// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     dumping: 50,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01
//   }
// }

// const closeConfig = {
//   animation: 'timing',
//   config: {
//     duration: 200,
//     easing: Easing.linear
//   }
// }

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator  
          screenOptions={{
            gestureEnabled: true,

            animation: 'slide_from_right'
          }}
        
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false}}/>
          <Stack.Screen name="Signup" component={SignupScreen}options={{cardStyleInterpolators: CardStyleInterpolators.forVerticalIOS}} />
          <Stack.Screen name="SignupSeller" component={SignupSellerScreen}  options={{title: "Create a Shop"}}/>
          <Stack.Screen name="Explore" component={ExploreScreen}  options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginScreen}/>


          <Stack.Screen name="SuccessSeller" component={SuccessSellerScreen} options={{title: 'Success',  headerLeft: (props) => { return (
            <Image source={require('./assets/icons/close.png')} style={{height: 15, width: 15, marginHorizontal: 15}} onPress={() => props.navigation.navigate("Home")}/>
            )}, animation: 'slide_from_bottom'}}/>



          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name="Product" component={ProductScreen}/>
          <Stack.Screen name="Checkout" component={CheckoutScreen}/>
          
        

        </Stack.Navigator>
      </NavigationContainer>
  );
}

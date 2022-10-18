import * as React from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import {useTailwind} from 'tailwind-rn';


export const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView >
            <View className="flex-1 items-center justify-center bg-black">
            <Text>This is Home page!</Text>
            <View style={styles.buttons}>
                <Button title="Sign up Buyer" onPress={() => navigation.navigate("Signup")}></Button>
                <Button title="Sign up Seller" onPress={() => navigation.navigate("SignupSeller")}></Button>
                <Button title="Take me to app" onPress={() => navigation.navigate("Explore")}></Button>
            </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttons: {
        display: "flex",
        flexDirection: "row"
    }
  });
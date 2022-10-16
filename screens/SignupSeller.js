import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const SignupSellerScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>This is SignUp Seller page!</Text>
            <View style={styles.buttons}>
                <Button title="Go Back Home" onPress={() => navigation.navigate("Home")}></Button>
            </View>
        </View>
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
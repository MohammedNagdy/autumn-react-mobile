import * as React from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BigButton } from '../components/BigButton';
import { BoldTitle } from '../components/BoldTitle';
import { LinkText } from '../components/LinkText';
import { NormalText } from '../components/NormalText';


// import { LinkText } from "../components/LinkText";

// import {useTailwind} from 'tailwind-rn';
import {container} from "../assets/ConstantsTheme";


export const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{backgroundColor: "#000000", height: '100%'}}>
        <View style={[container,{paddingTop:'70%'}]}>
         
              <BoldTitle 
                text="Buy"
                color="#fff"
                fontsize={28}
                allcaps={true}
            />
            <BoldTitle 
                text="Sell"
                color="#fff"
                fontsize={28}
                allcaps={true}
            />
            <BoldTitle 
                text="Discover"
                color="#fff"
                fontsize={28}
                allcaps={true}
            />
            <View style={{marginVertical: 10}}>
            <NormalText
              text="Discover unique items"
              color="#fff"
              fontsize={14}
            />
            </View>
            <BigButton
                bgColor="#FF2301"
                title="Help me find things I love"
                textcolor="#fff"
                titlesize={14}
                description="Let's help you find pieces you love"
                descriptionsize={12}
                onPress={() => navigation.navigate("Signup")}
            
            />
            <BigButton
                bgColor="#fff"
                title="I want to start selling"
                textcolor="#00000"
                titlesize={14}
                description="Pick this option if you want to start selling or create a shop"
                descriptionsize={12}
                onPress={() => navigation.navigate("SignupSeller")}
            />
            <View style={{paddingTop: 20,flex: 1 , alignSelf: 'center'}}>
            <LinkText 
                text="Take me to the app"
                color="#fff"
                fontsize={12}
                alignment='center'
                onPress={() => navigation.navigate("Explore")}

            />
            </View>

        </View>
        </SafeAreaView>
    )
}

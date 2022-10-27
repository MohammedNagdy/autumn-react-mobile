import * as React from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView } from 'react-native';

import { BoldTitle } from "../components/BoldTitle";
import { NormalText } from "../components/NormalText";
import { LinkText } from "../components/LinkText";
import { SmallButton } from '../components/SmallButton';


import { container, textInputStyle, rowItems } from "../assets/ConstantsTheme";


export const SignupScreen = ({ navigation }) => {

  // Styling
  const fontsize = 15;

    return (
        <SafeAreaView style={{backgroundColor: "#fff", height: '100%'}}>

        
         <View style={[container,{backgroundColor: "#fff", paddingTop: '20%'}]}>

            <View style={{paddingBottom:'10%'}}>
            <BoldTitle 
                
              text="Create an account"
              color="#00000"
              fontsize={24}
              allcaps={true}
            />
            </View>
            <SmallButton 
                
              bgColor="#fff"
              title="With Mobile Phone"
              textcolor="#262626"
              titlesize={14}
              border={true}
              iconexists={true}
              icon={require(`../assets/icons/sim-card.png`)}
              alignment='flex-start'
              onPress={() => navigation.navigate("Register")}
            />
            <SmallButton 
                  
              bgColor="#fff"
              title="Continue with Tiktok"
              textcolor="#262626"
              titlesize={14}
              border={true}
              iconexists={true}
              icon={require(`../assets/icons/tik-tok.png`)}
              alignment='flex-start'
              // onPress={() => navigation.navigate("Signup")}
            />
            
            <SmallButton 
              
              bgColor="#fff"
              title="Continue with Instagram"
              textcolor="#262626"
              titlesize={14}
              border={true}
              iconexists={true}
              icon={require(`../assets/icons/instagram.png`)}
              alignment='flex-start'
              // onPress={() => navigation.navigate("Signup")}
            />
            {
              // I have a problem in the is blocl pf code space in between is not working in flexbox!
              // Fixed it with adding another hidden button
            }
             <View style={[rowItems, {alignItems: 'flex-start', paddingTop: 20,flex: 1 , flexWrap: 'wrap', alignSelf: 'center'}]}>
            <NormalText
              text="By continuing you agree to "
              color="#00000"
              fontsize={10}
              allcaps={true}
            />
            <LinkText
              text="the terms and conditions"
              color="#00000"
              fontsize={10}
              allcaps={true}
            />
            </View>
            <View style={[rowItems, {alignItems: 'flex-start', justifyContent: 'space-between'}]}>
            
              
              <SmallButton 
                
                bgColor="#262626"
                title="Continue"
                textcolor="#fff"
                titlesize={14}
                onPress={() => navigation.navigate("Register")}
              />
            </View>
        </View>
       {// <View >
            //     <Button title="Go Back Home" onPress={() => navigation.navigate("Home")}></Button>
            //     <Button title="Login" onPress={() => navigation.navigate("Login")}></Button>
            //     <Button title="Explore the app" onPress={() => navigation.navigate("Explore")}></Button>

            // </View>
       }
        </SafeAreaView>
        
    )
}

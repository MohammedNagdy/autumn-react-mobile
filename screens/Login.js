import * as React from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView } from 'react-native';

import { BoldTitle } from "../components/BoldTitle";
import { SmallButton } from '../components/SmallButton';

import { container, textInputStyle, rowItems } from "../assets/ConstantsTheme";


export const LoginScreen = ({ navigation }) => {
  const [mobilePhone, setMobilePhone] = React.useState("")
  const [password, setPassword] = React.useState("")

  // Styling
  const fontsize = 15;

    return (
      <SafeAreaView style={{backgroundColor: "#fff", height: '100%'}}>

        
         <View style={[container,{backgroundColor: "#fff", paddingTop: '20%'}]}>

            <View style={{paddingBottom:'10%'}}>
            <BoldTitle 
                
                text="Login"
                color="#00000"
                fontsize={24}
                allcaps={true}
            />
            </View>
           <BoldTitle 
                text="Mobile Number"
                color="#00000"
                fontsize={fontsize}
                allcaps={true}
            />
             <TextInput
              style={textInputStyle}
              onChangeText={setMobilePhone}
              value={mobilePhone}
            />
            
            <BoldTitle 
                text="Password"
                color="#00000"
                fontsize={fontsize}
                allcaps={true}
            />
            <TextInput
              style={textInputStyle}
              onChangeText={setPassword}
              value={password}
            />
            {
              // I have a problem in the is blocl pf code space in between is not working in flexbox!
              // Fixed it with adding another hidden button
            }
            <View style={[rowItems, {alignItems: 'flex-start', justifyContent: 'space-between'}]}>
            
              
              <SmallButton 
                
                bgColor="#262626"
                title="Continue"
                textcolor="#fff"
                titlesize={14}
                // onPress={() => navigation.navigate("Signup")}
              />
            </View>
        </View>
        </SafeAreaView>


            
    )
}

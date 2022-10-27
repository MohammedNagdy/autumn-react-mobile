import * as React from 'react';
import { StyleSheet, TextInput, View, Text, SafeAreaView } from 'react-native';

import { BoldTitle } from "../components/BoldTitle";
import { Line } from "../components/Line";
import { SmallButton } from '../components/SmallButton';
import { NormalText } from '../components/NormalText';
import { LinkText } from '../components/LinkText';

import { container, textInputStyle, rowItems } from "../assets/ConstantsTheme";



export const RegisterScreen = ({ navigation }) => {
  const [mobilePhone, setMobilePhone] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")

  //Styling
  const fontsize= 14;

    return (
        <SafeAreaView style={{backgroundColor: "#fff", height: '100%'}}>

        
         <View style={[container,{backgroundColor: "#fff", paddingTop: '20%'}]}>

            <View style={{paddingBottom:'10%'}}>
            <BoldTitle 
                
                text="Register"
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
            
            <BoldTitle 
                text="Confirm Password"
                color="#00000"
                fontsize={fontsize}
                allcaps={true}
            />
            <TextInput
              style={textInputStyle}
              onChangeText={setConfirmPassword}
              value={confirmPassword}
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
                // onPress={() => navigation.navigate("Signup")}
              />
            </View>
        </View>
        </SafeAreaView>

    )
}

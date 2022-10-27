import * as React from 'react';
import { StyleSheet, Button, View, Text, TextInput, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NormalText } from "../components/NormalText";
import { BoldTitle } from "../components/BoldTitle";
import { Line } from "../components/Line";
import { SmallButton } from '../components/SmallButton';
import { Divider } from '@rneui/themed';



import { container, textInputStyle, rowItems } from "../assets/ConstantsTheme";

export const SignupSellerScreen = ({ navigation }) => {
  const [bizName, setBizName] = React.useState("")
  const [bizBio, setBizBio] = React.useState("")
  const [bizInsta, setBizInsta] = React.useState("")
  const [clientName, setClientName] = React.useState("")
  const [clientNumber, setClientNumber] = React.useState("")

  // Styling Constants
  const fontsize = 15

    return (
      <SafeAreaView style={{backgroundColor: "#fff", height: '100%'}}>
        <View style={[container,{backgroundColor: "#fff", paddingTop: 50}]}>
            
           <BoldTitle 
                text="Business Name"
                color="#00000"
                fontsize={fontsize}
                allcaps={true}
            />
             <TextInput
              style={textInputStyle}
              onChangeText={setBizName}
              value={bizName}
            />
            <BoldTitle 
                text="Business Bio"
                color="#00000"
                fontsize={fontsize}
                allcaps={true}
            />
            <TextInput
              style={textInputStyle}
              onChangeText={setBizBio}
              value={bizBio}
              multiline={true}
              numberOfLines = {40}

            />
            <BoldTitle 
                text="Business Instagram URL"
                color="#00000"
                fontsize={fontsize}
                allcaps={true}
            />
            <TextInput
              style={textInputStyle}
              onChangeText={setBizInsta}
              value={bizInsta}
            />
            
            <View style={{marginVertical: 15}}>
            <BoldTitle 
                text="Client Info"
                color="#8D8D8D"
                fontsize={fontsize}
                allcaps={true}
            />
            <Divider style={{minWidth:'80%'}} width={1} color={"#8D8D8D"} inset={true} insetType="left"/>
            </View>
            <BoldTitle 
                text="Client Name"
                color="#00000"
                fontsize={fontsize}
                allcaps={true}
            />
            <TextInput
              style={textInputStyle}
              onChangeText={setClientName}
              value={clientName}
            />
            <BoldTitle 
                text="Client Number"
                color="#00000"
                fontsize={fontsize}
                allcaps={true}
            />
             <TextInput
              style={textInputStyle}
              onChangeText={setClientNumber}
              value={clientNumber}
            />
            {
              // I have a problem in the is blocl pf code space in between is not working in flexbox!
              // Fixed it with adding another hidden button
            }
            <View style={[rowItems, {alignItems: 'center', justifyContent: 'space-between'}]}>
            
              <SmallButton 
                bgColor="#fff"
                title="Go Back"
                textcolor="#262626"
                titlesize={14}
                border={true}
                width={20}
                onPress={() => navigation.goBack()}
              />
              <SmallButton 
                bgColor="#fff"
                title=""
                textcolor="#262626"
                titlesize={14}
                width={20}
                //
              />
              
              <SmallButton 
                
                bgColor="#262626"
                title="Submit"
                textcolor="#fff"
                titlesize={14}
               onPress={() => navigation.navigate("SuccessSeller")}
              />
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
  });
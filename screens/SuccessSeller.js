import * as React from 'react';
import { StyleSheet, Button, View, Image, SafeAreaView } from 'react-native';

// import { Image } from '@rneui/themed';

import { BoldTitle } from "../components/BoldTitle";
import { NormalText } from "../components/NormalText";
import { SmallButton } from '../components/SmallButton';

import { containerCenter } from '../assets/ConstantsTheme';

export const SuccessSellerScreen = ({ navigation }) => {
    return (
      <SafeAreaView style={{height: '100%'}}>
        <View style={styles.container}>
            <Image 
            source={require('../assets/icons/correction.png')}
            style={{height: 80, width:80, marginVertical:20}}
            />
            <NormalText
            text="Your seller application was submitted successfully"
            fontsize={12}
            color="#00000"
            />
            <NormalText
            text="Wait for a call from Autmn's team"
            fontsize={12}
            color="#00000"
            />
            <View style={{minWidth: 80, height: 60, marginVertical:40}}>
             <SmallButton 
                
                bgColor="#fff"
                title="Home"
                textcolor="#262626"
                titlesize={14}
                border={true}
                onPress={() => navigation.navigate("Home")}
              />
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
    }
  });
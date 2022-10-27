import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BoldTitle } from './BoldTitle';
import { NormalText } from './NormalText';


export const BigButton = ( {onPress, bgColor="#fff", title, textcolor, titlesize, description, descriptionsize}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: bgColor}]}>
            <BoldTitle 
                text={title}
                color={textcolor}
                fontsize={titlesize}
            />
            <View style={{flex: 1, flexDirection: "row" }}>
                <NormalText text={description} color={textcolor} fontsize={descriptionsize}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'flex-start',
      // justifyContent: 'left',
      padding: 10,
      paddingBottom: 20,
      marginTop: 10,
      maxHeight:100
    },
    
    
  });
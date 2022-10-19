import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const BoldTitle = (text, color="#0000", fontsize="24", allcaps=false) => {
    const textT = allcaps? "uppercase": "none";

    return (
        <Text style={[styles.text, {fontColor: color, fontSize: fontsize, textTransform: textT}]}>
           {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
      fontWeight: "700",
    },
  });
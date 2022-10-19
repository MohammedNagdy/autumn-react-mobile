import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const BigButton = ( bgColor="#fff", title) => {
    return (
        <View style={[styles.container, {backgroundColor: bgColor}]}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.buttons}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'left',
    },
    title: {
        display: "flex",
        flexDirection: "row",

    }
  });
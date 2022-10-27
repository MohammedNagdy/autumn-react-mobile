import * as React from 'react';
import { StyleSheet, Button, View, Text, TouchableHighlight } from 'react-native';


export const LinkText = ({onPress, text, color='#0000', fontsize=24, allcaps=false, alignment='flex-start'}) => {
    const textT = allcaps? 'uppercase': 'none';

    return (
      <TouchableHighlight onPress={onPress} style={{alignSelf: alignment}}>
        <Text style={[styles.text, {color: color, fontSize: fontsize, textTransform: textT}]}>
           {text}
        </Text>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    text: {
      textDecoration: 'underline',
    },
  });
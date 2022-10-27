import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { BoldTitle } from './BoldTitle';
import { NormalText } from './NormalText';


export const Tag = ( {onPress, bgColor="#fff", title, textcolor, titlesize, buttonwidth, border=false, alignment='center'}) => {
    const borderwidth= border? 1: 0;
    const bordercolor= border? textcolor:''

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, {justifyContent: alignment,backgroundColor: bgColor, width:buttonwidth, borderWidth: borderwidth, borderColor: bordercolor}]}>

            <BoldTitle 
                text={title}
                color={textcolor}
                fontsize={titlesize}
            />
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 5,
      marginHorizontal: 3,
      marginTop: 10,
      maxHeight:25,
      borderRadius: 4
    },

  });
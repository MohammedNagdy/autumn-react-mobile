import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { BoldTitle } from './BoldTitle';
import { NormalText } from './NormalText';


export const SmallButton = ( {onPress, bgColor="#fff", title, textcolor, titlesize, buttonwidth, border=false, iconexists=false, icon=``, alignment='center'}) => {
    const borderwidth= border? 1: 0;
    const bordercolor= border? textcolor:''

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, {justifyContent: alignment,backgroundColor: bgColor, width:buttonwidth, borderWidth: borderwidth, borderColor: bordercolor}]}>
          {iconexists? <Image style={styles.icon} source={icon}/> : ''}

            <BoldTitle 
                text={title}
                color={textcolor}
                fontsize={titlesize}
                allcaps={true}
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
      padding: 10,
      paddingBottom: 10,
      marginTop: 10,
      maxHeight:40
    },
    icon: {
        maxHeight: 15,
        maxWidth: 15,
        marginRight: 20,
        marginLeft: 20
    }
    
    
  });
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Divider, Avatar, Image } from '@rneui/themed';
import { BoldTitle } from '../components/BoldTitle';
import { NormalText } from '../components/NormalText';
import { Tag } from '../components/Tag';
import { SmallButton } from '../components/SmallButton';


import {container, rowItems} from "../assets/ConstantsTheme";
import { stores, tags, BASE_URI } from '../data/mockData';


export const ProductScreen = ({ route, navigation }) => {

  // Constants

  // Dummy data
  const dummyTags = tags.slice(0,5);
  const conds = ['good', 'new', 'never-used']
  const price = 300

  // Get params
  const {itemId} = route.params;

    return (
        <SafeAreaView style={{backgroundColor: "#fff", height: '100%'}}>
        <ScrollView>
        <View style={[container, {maxHeight:'15%'}]}>
        <View style={[container, rowItems]}>
        <TouchableOpacity style={{alignItems: 'center', marginVertical: 5}}>
          <Avatar 
            size={40}
            rounded
            source={stores[0].avatarUri ? { uri: stores[0].avatarUri } : {}}
            key={`${stores[0].id}`}
            avatarStyle={{marginHorizontal: 5}}
          />
          
        </TouchableOpacity>
        <View style={{marginVertical:10, marginHorizontal:10}}>
            <BoldTitle
              text={stores[0].name}
              color="#00000"
              fontsize={12}
              allcaps={true}
            />
            <NormalText
              text="Cairo, Egypt"
              color="#8D8D8D"
              fontsize={10}
            />
          </View>
        </View>
      
            
            { //<View style={styles.buttons}>
            //     <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
            //     <Button title="Buy" onPress={() => navigation.navigate("Checkout")}></Button>
            // </View>
            }
        </View>
        <View >
         <Image
            style={{height:320, width: '100%'}}
            source={{ uri: BASE_URI + itemId  }}
         />
         </View>
         <View style={container}>
         <View style={{alignContent: 'center', justifyContent:'flex-end'}}>
         <Text style={rowItems}>
            <BoldTitle
              text={stores[0].name}
              color="#00000"
              fontsize={12}
              allcaps={true}
            />
            <NormalText
              text="  Adobe Creative Cloud is a set of applications and services from Adobe Inc. that gives subscribers access to a collection of software used for graphic design, video editing, web development, photograph Adobe Creative Cloud is a set of applications and services from Adobe Inc. that gives subscribers access to a collection of software used for graphic design, video editing, web development, photograph Adobe Creative Cloud is a set of applications and services from Adobe Inc. that gives subscribers access to a collection of software used for graphic design, video editing, web development, photograph Adobe Creative Cloud is a set of applications and services from Adobe Inc. that gives subscribers access to a collection of software used for graphic design, video editing, web development, photograph"
              color="#8D8D8D"
              fontsize={12}
            />
            
         </Text>
         <View style={rowItems}>
         {dummyTags.map((item) => (
           <Tag
            bgColor="#262626" 
            title={item.tag} 
            textcolor="#fff" 
            titlesize={12}/> 
         ))}
         </View>
         <View style={[container,{justifyContent: 'flex-start'}]}>
         <View style={rowItems}>
         <NormalText
              text="Conditon: "
              color="#8D8D8D"
              fontsize={12}
            />
            {conds.map((cond) => (<BoldTitle
              text={cond+ ' '}
              color="#000000"
              fontsize={12}
            />
            ))}
         </View>
         <View style={rowItems}>
         <NormalText
              text="Price: "
              color="#8D8D8D"
              fontsize={12}
            />
            <BoldTitle
              text={price}
              color="#000000"
              fontsize={12}
            />
            
         </View>
         <NormalText
              text="3 weeks ago "
              color="#8D8D8D"
              fontsize={10}
            />
            </View>

            <SmallButton 
                
                bgColor="#262626"
                title="Buy"
                textcolor="#fff"
                titlesize={14}
                onPress={() => navigation.navigate("Checkout")}
              />
          </View>
         </View>
        </ScrollView>
        
        
        </SafeAreaView>
    )
}

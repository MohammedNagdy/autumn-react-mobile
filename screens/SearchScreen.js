import * as React from 'react';
import { TouchableOpacity, FlatList, View, ScrollView, SafeAreaView, Platform } from 'react-native';
import { SearchBar, Divider, Avatar, Image } from '@rneui/themed';

import { BoldTitle } from "../components/BoldTitle";
import { Tag } from "../components/Tag";
import { NormalText } from '../components/NormalText';
import { Line } from '../components/Line';

import { tags, stores, BASE_URI } from '../data/mockData';

import { container, textInputStyle, rowItems } from "../assets/ConstantsTheme";


export const SearchScreen = ({ navigation }) => {
  //Constants


  // Search data manipulation
  

  // Tags list 
  const renderTag = ({item}) => {
      return  (
          <NormalText 
          fontsize={18}
          color={"#00000"}
          text={item.tag}
        
          />
       )
  }


  // Avatar List
  const renderAvatar = ({item, index}) => {
    return (
      <TouchableOpacity style={[rowItems,{flex: 1, alignItems: 'center', marginVertical: 10}]}>
      <Avatar 
        size={64}
        rounded
        source={item.avatarUri ? { uri: item.avatarUri } : {}}
        key={`${index}-${item.id}`}
        avatarStyle={{marginHorizontal: 5}}
      />
      <View style={{marginVertical:20}}>
      <BoldTitle
        text={item.name}
        color="#00000"
        fontsize={12}
        allcaps={true}
      />
      <BoldTitle
        text={`@${item.name}`}
        color="#00000"
        fontsize={12}
        allcaps={true}
      />
      </View>
      </TouchableOpacity>
    )
  }

  // Styling

    return (
        <View style={[container,{backgroundColor: "#fff", paddingTop: '5%', height: '100%'}]}>
        {
          // Tags View
        }
        <BoldTitle 
          text="Tags"
          color="#00000"
          fontsize={16}
          allcaps={true}
        />
        <FlatList
          data={tags}
          renderItem={renderTag}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        {
          // Stores View
        }
        <View style={{marginVertical:5}}>
        <BoldTitle 
          text="People"
          color="#00000"
          fontsize={16}
          allcaps={true}
        />
        </View>
        
        <FlatList
          data={stores}
          renderItem={renderAvatar}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
        />
        
        
        </View>
            
    )
}


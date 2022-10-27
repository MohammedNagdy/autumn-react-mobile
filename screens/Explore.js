import * as React from 'react';
import { TouchableOpacity, FlatList, View, ScrollView, SafeAreaView, Platform } from 'react-native';
import { SearchBar, Divider, Avatar, Image } from '@rneui/themed';

import { BoldTitle } from "../components/BoldTitle";
import { Tag } from "../components/Tag";
import { NormalText } from '../components/NormalText';
import { Line } from '../components/Line';
import { SearchScreen } from './SearchScreen';

import { tags, stores, BASE_URI } from '../data/mockData';

import { container, containerExplore, containerComponent } from "../assets/ConstantsTheme";


export const ExploreScreen = ({ navigation }) => {
  //Constants


  // Search data manipulation
  const [searched, setSearch] = React.useState("");
  const [isSeraching, setIsSearching] = React.useState(false)

  const updateSearch = (search) => {
    setIsSearching(true);
    setSearch(search);
  
  };

  const onCancelSearch = () => {
    setIsSearching(false)
    setSearch("")
  }

  // Tags list 
  const renderTag = ({item}) => {
      return  (
          <Tag 
          bgColor="#262626" 
          title={item.tag} 
          textcolor="#fff" 
          titlesize={12}/>
       )
  }

  // Product List
  const renderProduct = ({item, index}) => {
    return (
      <TouchableOpacity style={{alignItems: 'center', padding: 1}}>
      <Image 
        source={{ uri: BASE_URI + item }}
        style={{height:100, width: 130}}
        onPress={() => navigation.navigate("Product",{itemId: item})}
      />
      </TouchableOpacity>
    )
  }


  // Avatar List
  const renderAvatar = ({item, index}) => {
    return (
      <TouchableOpacity style={{alignItems: 'center', marginVertical: 10}}>
      <Avatar 
        size={64}
        rounded
        source={item.avatarUri ? { uri: item.avatarUri } : {}}
        key={`${index}-${item.id}`}
        avatarStyle={{marginHorizontal: 5}}
      />
      <BoldTitle
        text={item.name}
        color="#00000"
        fontsize={12}
        allcaps={true}
      />
      </TouchableOpacity>
    )
  }

  // Styling
  const dividerColor = '#E9E9E9'

    return (
        <SafeAreaView style={{backgroundColor: "#fff", height: '100%'}}>
        <ScrollView style={[containerExplore,{backgroundColor: "#fff", paddingTop: '5%'}]}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={searched}
          platform={Platform.OS}
          onClear={onCancelSearch}
          onCancel={onCancelSearch}
        />
        { isSeraching? (<SearchScreen/>) :
        <View>
        <Divider style={{minWidth: '100%'}}  width={1} color={dividerColor}/>
        <View style={containerComponent}>
        <BoldTitle 
          text="Quick Search"
          color="#00000"
          fontsize={16}
          allcaps={true}
        />
        <FlatList
          data={tags}
          renderItem={renderTag}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        </View>
        
        <Divider style={{minWidth: '100%', marginVertical:10}}  width={1} color={dividerColor}/>
        <View style={containerComponent}>
        <BoldTitle 
          text="Meet Sellers"
          color="#00000"
          fontsize={16}
          allcaps={true}
        />
        <NormalText 
          text="Shops and people to follow"
          color="#8D8D8D"
          fontsize={12}
        />
        <FlatList
          data={stores}
          renderItem={renderAvatar}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        </View>
        
        <Divider style={{minWidth: '100%', marginVertical:10}}  width={1} color={dividerColor}/>
        <View  style={{...containerComponent, marginVertical:15}}>

        <BoldTitle 
          text="Autumn's Picks"
          color="#00000"
          fontsize={16}
          allcaps={true}
        />
        <NormalText 
          text="Here's what's hot now"
          color="#8D8D8D"
          fontsize={12}
        />
        </View>
          <FlatList
            data={[...new Array(30)].map((_, i) => i.toString())}
            numColumns={3}
            keyExtractor={(e) => e}
            renderItem={renderProduct}
          />
        </View>
         
        
        }
        </ScrollView>
            
        </SafeAreaView>
    )
}


import * as React from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import { Divider, Avatar, Image } from '@rneui/themed';

import { BoldTitle } from '../components/BoldTitle';
import { SmallButton } from '../components/SmallButton';

import { container, textInputStyle, rowItems } from '../assets/ConstantsTheme';

import { tags, stores, BASE_URI } from '../data/mockData';

export const CheckoutScreen = ({ navigation }) => {
  // Styling
  const fontsize = 12;
  const tableFontSize = 10;

  // Input info
  const [address, setAddress] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
      <View style={[container, { backgroundColor: '#fff', paddingTop: '20%' }]}>
        <View style={[rowItems, { maxHeight: 120 }]}>
          <Image
            style={{ height: 80, width: 80 }}
            source={{ uri: BASE_URI + '1' }}
          />
          <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
            <BoldTitle
              text="Product Name"
              color="#00000"
              fontsize={10}
              allcaps={true}
            />
            <View style={[rowItems, { flex: 1, marginVertical: 30 }]}>
              <BoldTitle
                text="Price"
                color="#00000"
                fontsize={10}
                allcaps={true}
              />
              <View style={{ paddingLeft: '56%' }}>
                <BoldTitle
                  text="300 EGP"
                  color="#00000"
                  fontsize={10}
                  allcaps={true}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: 150 }}>
          <BoldTitle text="Total" color="#00000" fontsize={18} allcaps={true} />
          <View style={{ marginVertical: 10 }}>
            <View style={[rowItems, { minWidth: '100%' }]}>
              <BoldTitle
                text="Subtotal Price"
                color="#00000"
                fontsize={tableFontSize}
                allcaps={true}
              />
              <View style={{ paddingLeft: '50%' }}>
                <BoldTitle
                  text="300 EGP"
                  color="#00000"
                  fontsize={tableFontSize}
                  allcaps={true}
                />
              </View>
            </View>
            <View style={[rowItems, { minWidth: '100%' }]}>
              <BoldTitle
                text="Shipping Costs"
                color="#00000"
                fontsize={tableFontSize}
                allcaps={true}
              />
              <View style={{ paddingLeft: '50%' }}>
                <BoldTitle
                  text="50 EGP"
                  color="#00000"
                  fontsize={tableFontSize}
                  allcaps={true}
                />
              </View>
            </View>
            <View style={[rowItems, { minWidth: '100%' }]}>
              <BoldTitle
                text="Total Price"
                color="#00000"
                fontsize={tableFontSize}
                allcaps={true}
              />
              <View style={{ paddingLeft: '55%' }}>
                <BoldTitle
                  text="350 EGP"
                  color="#00000"
                  fontsize={tableFontSize}
                  allcaps={true}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 15}}>
          <BoldTitle
            text="Shipping Details"
            color="#00000"
            fontsize={12}
            allcaps={true}
          />
          </View>
          <BoldTitle
            text="Address"
            color="#00000"
            fontsize={fontsize}
            allcaps={true}
          />
          <TextInput
            style={textInputStyle}
            onChangeText={setAddress}
            value={address}
          />

          <BoldTitle
            text="Mobile Number"
            color="#00000"
            fontsize={fontsize}
            allcaps={true}
          />
          <TextInput
            style={textInputStyle}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
          />
          <SmallButton 
              
              bgColor="#262626"
              title="Checkout"
              textcolor="#fff"
              titlesize={14}
              // onPress={() => navigation.navigate("Signup")}
            />
      </View>
    </SafeAreaView>
  );
};

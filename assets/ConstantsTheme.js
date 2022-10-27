import {StatusBar} from 'react-native';

export const containerCenter = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  // alignContent: 'space-evenly',
  padding: 15,
  paddingTop: StatusBar.currentHeight,
  height:'100%'
}

export const container = {
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  // alignContent: 'space-evenly',
  padding: 15,
  paddingTop: StatusBar.currentHeight,
  height:'100%'
}

export const containerExplore = {
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  // alignContent: 'space-evenly',
  paddingTop: StatusBar.currentHeight,
  height:'100%'
}

export const containerComponent= {
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height:'100%',
  marginHorizontal: 10
}

export const textInputStyle = {
  alignSelf: 'stretch',
  height: 38,
  borderWidth: 1,
  marginBottom: 20,
}

export const rowItems = {
  flex:1,
  flexDirection: 'row',
}
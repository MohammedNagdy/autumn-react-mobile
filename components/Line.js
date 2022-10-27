
import * as React from 'react';
import { View} from 'react-native';


export const Line = ({color='#0000'}) => {

    return (
      <View
        style={{
          borderTopColor: {color},
          borderTopWidth: 1,
          alignSelf: 'stretch',
          paddingTop: 10,
        }}
      />
    )
}



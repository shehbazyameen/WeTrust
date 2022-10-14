import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { colors } from '../../config/Colors';
import { Assets } from '../../assests';


const DocumentUpload = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.screenColor}}>
      <View>
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            marginTop: -220,
            position: 'absolute',
            right: 18,
            // backgroundColor: 'red',
          }}
          source={Assets.headerImage}
        />
      </View>
<View style={{height:180}}></View>
      <View style={{alignItems:"center",justifyContent:"center"}}>
        <TouchableOpacity>
          <Image source={Assets.docUpload} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DocumentUpload;
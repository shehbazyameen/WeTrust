import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import { Assets } from '../assests'

const Home = () => {
  return (

    <ImageBackground style={{backgroundColor:"red"}} source={Assets.homeCover} resizeMode="cover">
    </ImageBackground>
  )
}

export default Home
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './screenheader.style'
import { ImageSourcePropType } from 'react-native'

const ScreenHeaderBtn = ({iconUrl, dimension}: {iconUrl: ImageSourcePropType, dimension: string}) => {

  const handlePress = () => {
    console.log("Am here to the index page !");
  }

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      {/* Làm sao để cho nó truyền vào như một đối số mà vẫn đúng cú pháp */}
      <View>
        <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimension)}/>
      </View>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
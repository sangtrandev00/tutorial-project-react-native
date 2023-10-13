import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({title, points}: {title: string, points: string[]}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}: </Text>

      <View style={styles.pointsContainer}>
          {points.map((pointItem, index) => {
            return (
              <View style={styles.pointWrapper} key={index }>
                <Text key={index} style={styles.pointDot}/>
                <Text style={styles.pointText}>{pointItem}</Text>
              </View>
            )
          })}
      </View>
    </View>
  )
}

export default Specifics
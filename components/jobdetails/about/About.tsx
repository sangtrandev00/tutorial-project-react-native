import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({description}: {description: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About</Text>

        <View style={styles.contentBox}>
          <Text style={styles.contextText}>{description}</Text>
        </View>
    </View>
  )
}

export default About
import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './popularjobcard.style'
import { checkImageUrl } from 'utils'

// {item, selectedJob, handleCardPress}
const PopularJobCard = ({item, selectedJob, handleCardPress}: {item: any, selectedJob: any, handleCardPress: (item: any) => void}) => {
  return (
    <TouchableOpacity style={styles.container(selectedJob, item)} onPress={() => handleCardPress(item)}>

      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: item.employer_logo
            // uri: checkImageUrl(item.employer_logo) ? item.employer_logo : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

        <View style={styles.infoContainer}>
            <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
              {item.job_title}
            </Text>
            <Text style={styles.location}>{item.job_country}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard
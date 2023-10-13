import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './nearbyjobcard.style'
import { checkImageUrl } from 'utils'
import { IJob } from '../../../../types/job';

// {item, selectedJob, handleCardPress}
const NearByJobCard = ({job, handleNavigate}: {job: IJob, handleNavigate: () => void}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate()}>

      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: job.employer_logo
            // uri: checkImageUrl(item.employer_logo) ? item.employer_logo : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

        <View style={styles.textContainer}>
            <Text style={styles.jobName} numberOfLines={1}>
              {job.job_title}
            </Text>
            <Text style={styles.jobType}>{job.job_employment_type}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default NearByJobCard
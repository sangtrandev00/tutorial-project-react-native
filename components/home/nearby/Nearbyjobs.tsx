import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import {COLORS, SIZES} from '../../../constants';
import useFetch from '../../../hook/useFetch';
import NearbyJobCard from 'components/common/cards/nearby/NearbyJobCard';


const NearbyJobs = () => {

  const router = useRouter();
  const {data, isLoading, error, refetch} = useFetch('search', {query: 'python developer in texas, usa', num_pages: '1', page: '1' })

  console.log("data: ", data);

  const handleCardPress = () => {
    console.log("press card!");
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Nearby Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
            {isLoading ? 
              (<ActivityIndicator size="large" colors={COLORS.primary}/>) : (error ? <Text>Something went wrong!</Text> : data.map((job) => (<NearbyJobCard handleCardPress={handleCardPress} handleNavigate={() => router.push(`/job-details/${job.job_id}`)} item={job} job={job} key={`nearby-job-${job?.job_id}`}/>)))
            }

        </View>

      <Text>NearbyJobs</Text>
    </View>
  )
}

export default NearbyJobs
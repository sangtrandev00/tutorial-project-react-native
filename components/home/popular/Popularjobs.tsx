import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from 'components/common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';


const Popularjobs = () => {

  const router = useRouter();
  const {data, isLoading, error, refetch} = useFetch('search', {query: 'python developer in texas, usa', num_pages: '1', page: '1' })

  console.log("data: ", data);

  const handleCardPress = () => {
    console.log("press card!");
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Popular Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn}>Show All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
            {isLoading ? 
              (<ActivityIndicator size="large" colors={COLORS.primary}/>) : (error ? <Text>Something went wrong!</Text> : <FlatList data={data}  renderItem={({item}) => (<PopularJobCard handleCardPress={handleCardPress} item={item}/>)} keyExtractor={item => item.job_id} contentContainerStyle={{columnGap: SIZES.medium}} horizontal />)
            }

        </View>

      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs
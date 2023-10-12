import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from 'components/common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';
const Popularjobs = () => {

  const router = useRouter();
  const {data, isLoading, error, refetch} = useFetch('search', {query: 'React Developer', num_pages: 1, page: 1 })

  console.log("data: ", data);

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
              (<ActivityIndicator size="large" colors={COLORS.primary}/>) : (error ? <Text>Something went wrong!</Text> : <FlatList data={[1,2,3,4,5]}  renderItem={({item}) => (<PopularJobCard item={item}/>)} keyExtractor={item => item} contentContainerStyle={{columnGap: SIZES.medium}} horizontal />)
            }

        </View>

      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs
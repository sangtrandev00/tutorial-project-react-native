import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import {icons, SIZES} from '../../../constants';

const jobTypes = ['Full-time','Part-time','Contractor']

const Welcome = ({searchTerm, setSearchTerm, handleClick}: {searchTerm: string, setSearchTerm: (text: string) => void, handleClick: () => void}) => {

  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Nhat Sang</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder="Search to find your perfect job!" value={searchTerm} onChange={(text) => setSearchTerm(text.nativeEvent.text)}/>
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage}/>
        </TouchableOpacity>

      </View>
      {/* Flat list */}
      <View style={styles.tabsContainer}>
          <FlatList data={jobTypes} renderItem={({item}) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={() => {setActiveJobType(item); router.push(`/search/${item}`)}}>
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )} keyExtractor={item => item} contentContainerStyle={{columnGap: SIZES.small}} horizontal/>
      </View>

    </View>
  )
}

export default Welcome
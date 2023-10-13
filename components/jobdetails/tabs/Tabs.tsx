import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants';

// const TabButton = ({name, activeTab, onHandleSearchType}: {name: string, activeTab: string, onHandleSearchType: () => void}) => {
//   <TouchableOpacity 
//   style={styles.btn(name, activeTab)}
//   onPress={onHandleSearchType}
//   >
//     <Text style={styles.btnText(name, activeTab)}>{name}</Text>
//   </TouchableOpacity>
// }

const TabButton: React.FC<{ name: string; activeTab: string; onHandleSearchType: () => void }> = ({ name, activeTab, onHandleSearchType }) => {
  // JSX code goes here
  return (
    <TouchableOpacity 
    style={styles.btn(name, activeTab)}
    onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};


const Tabs = ({tabs, activeTab, setActiveTab}: {tabs: string[], activeTab: string, setActiveTab: (item: string) => void}) => {
  return (
    <View style={styles.container}>

        <FlatList 
        data={tabs} 
        renderItem={({item}) => <TabButton name={item} activeTab={activeTab} onHandleSearchType={() => setActiveTab(item)}/> }
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: SIZES.medium}}
        />

      <Text>Tabs</Text>
    </View>
  )
}

export default Tabs
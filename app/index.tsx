import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
// Activity indicator là gì ?
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons, images, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

type Props = {}

function Index({}: Props) {

  const router = useRouter();
  
  console.log("Am here to the index page !");
  console.log("router: ", router);

  console.log("icons: ", icons);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen options={{
            headerStyle: {backgroundColor: COLORS.primary},  
            headerTitleStyle: {fontWeight: 'bold'} ,
            headerTintColor: 'white', headerShadowVisible: false, 
            headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>), 
            headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>), 
            headerTitle: "My Home" }}
          />

      <ScrollView showsVerticalScrollIndicator={false}>
          <View 
          style={{flex: 1, padding: SIZES.medium}}
          >
            <Welcome/>

          <Popularjobs/>
          <Nearbyjobs/>

          </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
});

export default Index;



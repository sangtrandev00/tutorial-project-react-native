import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

function Index({}: Props) {

    console.log("Am here to the index page !")

  return (
    <View style={{flex: 1}}>
        <Text style={[{color: 'white'}, styles.container]}>Index Page</Text>
        <View style={{flex: 1, backgroundColor: 'red'}}></View>
        <View style={{flex: 2, backgroundColor: 'blue'}}></View>
        <View style={{flex: 3, backgroundColor: 'green'}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
});

export default Index;



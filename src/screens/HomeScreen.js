import React from 'react'
import { Button, Text, StyleSheet, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
      <View>
        <Text style={styles.text}>App Screen</Text>
        <Button
            onPress={() => navigation.navigate('Components')}
            title="Go to Components Dmo"
        />
        <Button
          onPress={() => navigation.navigate('List')}
          title="Go to List Demo"
        />
      </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
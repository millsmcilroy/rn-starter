import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

//TODO: left off 5.34
const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;

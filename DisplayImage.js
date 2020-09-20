import React from "react";
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { images } from './ImagePath';

export default class DisplayImage extends React.Component{

  render() {
    return (
      <ScrollView
        directionalLockEnabled={true}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.modalContainer}>
          <ImageZoom
            cropWidth={300}
            cropHeight={200}
            imageWidth={200}
            imageHeight={200}
          >
            <Image
              style={{ width: 200, height: 200 }}
              source={images.items[this.props.imagePath].req}
            />
          </ImageZoom>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    modalContainer: {
      width: 300,
      height: 200,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
});
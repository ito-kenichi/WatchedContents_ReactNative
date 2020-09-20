import React from "react";
import { StyleSheet, Modal, Button } from 'react-native';
import DisplayImage from "./DisplayImage"

export default class DetailModal extends React.Component{

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        style={styles.modalStyle}
        visible={this.props.propsname}
      >
        <DisplayImage imagePath={this.props.contentId} />
        <Button title="CLOSE" onPress={() => this.props.closeDisplay()} />
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
    modalStyle: {
      width: 300,
      height: 200,
      backgroundColor: "green",
    }
});
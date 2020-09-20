import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import Details from "./DetailModal";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isModalVisible: false};
  }

  setModalVisible(visible) {
    this.setState({
      isModalVisible: visible,
    });
  }

  render() {
    return (
      <View style={styles.centeredView}>
        <Details
          propsname={this.state.isModalVisible}
          contentId={0}
          closeDisplay={() => this.setState({ isModalVisible: false })}
        />

        <TouchableHighlight
          style={styles.openButton}
          // onPress={() => {this.setModalVisible(true)}}
          onPress={() => {
            this.setState({
              isModalVisible: !this.state.isModalVisible,
            });
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
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
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  image: {
    width: 100,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  modalStyle: {
    width: 300,
    height: 200,
    backgroundColor: "green",
  }
});

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AppRegistry,
} from "react-native";
import Lista from "./lista";

const Main = () => {
  let count_name = "contatore 2";
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  AppRegistry.registerComponent("counter", () => Lista);
  return (
    <>
      <View style={styles.container2}>
        <View style={styles.test2}>
          <Text> ESCI SCHERMATA</Text>
        </View>

        <Text style={styles.text}>{count_name}</Text>
        <Text style={styles.text}>{number}</Text>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.incremento} onPress={increment}>
          <Text>Incremento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.incremento} onPress={decrement}>
          <Text>Decremento</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    fontSize: 75,
    color: "black",
  },
  container2: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "lightgray",
  },
  container1: {
    height: 50,
    alignItems: "flex-end",
    flexDirection: "row",
    backgroundColor: "green",
  },
  incremento: {
    backgroundColor: "lightblue",
    borderBlockColor: "black",
    border: 3,
    borderRadius: 10,
    borderColor: "black",
    height: 50,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  aggiunta: {
    // + per aggiungere un contatore
    backgroundColor: "purple",
    height: 50,
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  test2: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default Main;

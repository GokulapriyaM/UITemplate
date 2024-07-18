import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const authScreen = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
      >
        <Text style={{ fontSize: 20 }}>Generate Random Color</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default authScreen;

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
});
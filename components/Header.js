import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { secondary, white, black } from "../styles/theme";
import { Feather } from "@expo/vector-icons";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 25, color: black, fontWeight: "bold" }}>
        {props.name}
      </Text>
      <TouchableOpacity onPress={() => props.nav.navigate('Cart')} style={styles.cartContainer}>
        <Feather name="shopping-cart" size={16} color={white} />
        <Text style={{ fontSize: 16, color: white, marginLeft: 10 }}>0</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: secondary,
    borderRadius: 7,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});

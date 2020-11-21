import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { secondary, white, black } from "../styles/theme";
import { Feather } from "@expo/vector-icons";

let { width } = Dimensions.get("window");

export default function Delivery(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{ flex: 8 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Feather name="chevron-left" size={22} color={black} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartContainer}>
            <Feather name="phone" size={20} color={white} />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: white,
                marginLeft: 10,
              }}
            >
              Call to order
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{ fontSize: 22, fontWeight: "bold", color: black }}
                >
                  Delivery
                </Text>
              </View>
            </View>
            <SafeAreaView style={{ marginTop: 15 }}>
              <TextInput
                placeholder="Full Name"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 60,
                  borderRadius: 10,
                  fontSize: 18,
                  padding: 10,
                  paddingHorizontal: 20,
                  marginBottom: 10,
                }}
              />
              <TextInput
                placeholder="Address Line 1"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 60,
                  borderRadius: 10,
                  fontSize: 18,
                  padding: 10,
                  paddingHorizontal: 20,
                  marginBottom: 10,
                }}
              />
              <TextInput
                placeholder="Address Line 2"
                multiline={true}
                numberOfLines={5}
                textAlignVertical="top"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 85,
                  borderRadius: 10,
                  fontSize: 18,
                  padding: 10,
                  paddingHorizontal: 20,
                  marginBottom: 10,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              />
              <TextInput
                placeholder="City / Town"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 60,
                  borderRadius: 10,
                  fontSize: 18,
                  padding: 10,
                  paddingHorizontal: 20,
                  marginBottom: 10,
                }}
              />
              <TextInput
                placeholder="Phone Number"
                style={{
                  backgroundColor: "white",
                  width: "100%",
                  height: 60,
                  borderRadius: 10,
                  fontSize: 18,
                  padding: 10,
                  paddingHorizontal: 20,
                  marginBottom: 10,
                }}
              />
            </SafeAreaView>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 2.2,
          width: width,
          marginLeft: -20,
          paddingTop: 15,
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            // marginBottom: 5
          }}
        >
          <Text style={{ fontSize: 15, color: "gray" }}>
            Service Fee & Delivery
          </Text>
          <Text style={{ fontSize: 15, color: "gray" }}>&cent;20.00</Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Total</Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            &cent;1520.00
          </Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: secondary,
            width: "100%",
            height: 55,
            flexDirection: "row",
          }}
        >
          <Feather name="credit-card" color={white} size={20} />
          <Text style={{ color: "white", fontWeight: "bold", marginLeft: 10 }}>
            Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    width: width,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
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

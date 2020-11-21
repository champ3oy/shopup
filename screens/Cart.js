import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { secondary, white, black } from "../styles/theme";
import { Feather } from "@expo/vector-icons";
import { Data } from "../mockup/Data";

let { width } = Dimensions.get("window");

export default function Cart(props) {
  return (
    <View style={styles.container}>
      <StatusBar
            hidden={true}
          />
      <View style={{ flex: 8 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Feather name="chevron-left" size={22} color={black} />
          </TouchableOpacity>
          <View style={styles.cartContainer}>
            <Feather name="shopping-cart" size={20} color={white} />
            <Text style={{ fontSize: 16, color: white, marginLeft: 10 }}>
              0
            </Text>
          </View>
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
                  Cart
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <FlatList
                Vertical
                showsVerticalScrollIndicator={false}
                data={Data}
                keyExtractor={(item) => item.productName.toString()}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Product", item)}
                      style={{
                        width: "100%",
                        height: 100,
                        borderRadius: 10,
                        backgroundColor: "white",
                        alignItems: "center",
                        padding: 5,
                        marginBottom: 15,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        elevation: 1,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 80, height: 80, marginRight: 8 }}
                      />
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "flex-end",
                          paddingBottom: 5,
                          marginLeft: 5,
                        }}
                      >
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            color: "gray",
                          }}
                        >
                          {item.productName}
                        </Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 16,
                            color: "black",
                          }}
                        >
                          1 X &cent;{item.price}.00
                        </Text>
                      </View>
                      <TouchableOpacity style={{ padding: 15 }}>
                        <Feather name="trash" size={20} color="red" />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
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
          onPress={() => props.navigation.navigate("Delivery")}
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
          <Feather name="shopping-bag" color={white} size={20} />
          <Text style={{ color: "white", fontWeight: "bold", marginLeft: 10 }}>
            Checkout
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
    padding: 3,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});

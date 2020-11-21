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
  StatusBar,
} from "react-native";
import { secondary, white, black } from "../styles/theme";
import { Feather } from "@expo/vector-icons";
import { Data } from "../mockup/Data";
import { LinearGradient } from "expo-linear-gradient";

let { width } = Dimensions.get("window");

export default function Products(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Feather name="chevron-left" size={22} color={black} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Cart")}
          style={styles.cartContainer}
        >
          <Feather name="shopping-cart" size={20} color={white} />
          <Text style={{ fontSize: 16, color: white, marginLeft: 10 }}>1</Text>
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
              <Text style={{ fontSize: 22, fontWeight: "bold", color: black }}>
                Products
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
                  <LinearGradient
                    colors={item.bgColor}
                    onPress={() => props.navigation.navigate("Product", item)}
                    style={{
                      width: "100%",
                      height: 100,
                      borderRadius: 10,

                      alignItems: "center",
                      padding: 5,
                      marginBottom: 15,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
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
                          fontSize: 15,
                          color: white,
                        }}
                      >
                        {item.productName}
                      </Text>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 13,
                          color: white,
                        }}
                      >
                        &cent;{item.price}.00
                      </Text>
                    </View>
                    <Image
                      source={item.image}
                      style={{ width: 100, height: 100, marginRight: -20 }}
                    />
                  </LinearGradient>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
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

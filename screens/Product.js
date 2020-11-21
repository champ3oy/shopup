import * as React from "react";
import {

  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,

  TouchableOpacity,
  StatusBar,
} from "react-native";
import { primary, secondary, white } from "../styles/theme";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

let { width } = Dimensions.get("window");

export default function Product(props) {
  let Data = props.route.params;

  return (
    <LinearGradient style={[styles.container]} colors={Data.bgColor}>
      <StatusBar
            hidden={true}
          />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Feather name="chevron-left" size={25} color={white} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Cart")}
          style={styles.cartContainer}
        >
          <Feather name="shopping-cart" size={20} color={secondary} />
          <Text style={{ fontSize: 16, color: secondary, marginLeft: 10 }}>
            0
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={Data.image}
          style={{ width: "100%", height: width - 50 }}
        />
      </View>
      <View
        style={{
          width: width - 2,
          marginLeft: -19,
          height: "100%",
          flex: 1,
          backgroundColor: "white",
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              width: 40,
              height: 4,
              backgroundColor: "lightgray",
              borderRadius: 5,
            }}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 15 }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {Data.productName}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  &cent;{Data.price}.00
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    backgroundColor: "#eee",
                    padding: 3,
                    borderRadius: 5,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      width: 30,
                      height: 30,
                      borderRadius: 3,
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "#a0a4a8",
                    }}
                  >
                    <Feather
                      color="gray"
                      style={{ marginRight: 0 }}
                      size={10}
                      name="minus"
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      // width: 30,
                      height: 30,
                      fontSize: 10,
                      fontWeight: "700",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "700",
                      }}
                    >
                      10
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "white",
                      width: 30,
                      height: 30,
                      borderRadius: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather
                      color="gray"
                      style={{ marginRight: 0 }}
                      size={10}
                      name="plus"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 13, color: "gray" }}>
              {Data.description}
            </Text>
          </View>
          <View
            style={{
              marginBottom: 20,
              width: "100%",
              flexDirection: "row",
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: white,
                width: 55,
                height: 55,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                borderColor: "#eee",
                borderWidth: 1.5,
                marginRight: 10,
              }}
            >
              <Feather name="shopping-cart" color={secondary} size={18} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Delivery")}
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: secondary,
                width: "80%",
                height: 55,
              }}
            >
              <Text style={{ color: "white" }}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    width: width,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: white,
    borderRadius: 7,
    padding: 3,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});

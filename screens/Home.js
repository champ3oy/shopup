import React, { useState, useEffect } from "react";
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
import { background, primary, secondary, white, black } from "../styles/theme";
import Shop from "../configs/Shop";
import Header from "../components/Header";
import CarouselApp from "../components/Carousel";
import { LinearGradient } from "expo-linear-gradient";
import Loading from "./Loading";
import { Data } from "../mockup/Data";

let { width } = Dimensions.get("window");

export default function Home(props) {
  let [start, setStart] = useState(<Loading />);

  useEffect(() => {
    setTimeout(() => {
      setStart(
        <View style={styles.container}>
          <StatusBar hidden={true} />

          <ScrollView showsVerticalScrollIndicator={false}>
            <Header name={Shop.name} nav={props.navigation} />
            <CarouselApp nav={props.navigation} />
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: black }}
                >
                  Products
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("Products")}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}
                  >
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 15, marginBottom: 20 }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={Data}
                  keyExtractor={(item) => item.productName.toString()}
                  renderItem={({ item }) => {
                    return (
                      <LinearGradient
                        colors={item.bgColor}
                        style={{
                          width: 150,
                          height: 220,
                          borderRadius: 10,
                          alignItems: "center",
                          padding: 5,
                          marginRight: 10,
                        }}
                      >
                        <TouchableOpacity
                          onPress={() =>
                            props.navigation.navigate("Product", item)
                          }
                        >
                          <Image
                            source={item.image}
                            style={{ width: 120, height: 110 }}
                          />
                          <View
                            style={{
                              flex: 1,
                              justifyContent: "flex-end",
                              paddingBottom: 5,
                            }}
                          >
                            <Text
                              style={{
                                fontWeight: "bold",
                                elevation: 2,
                                fontSize: 15,
                                color: white,
                              }}
                            >
                              {item.productName}
                            </Text>
                            <Text
                              style={{
                                fontWeight: "bold",
                                elevation: 2,
                                fontSize: 13,
                                color: white,
                              }}
                            >
                              &cent;{item.price}.00
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </LinearGradient>
                    );
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }, 5000);
  }, []);
  return start;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    width: width,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
});

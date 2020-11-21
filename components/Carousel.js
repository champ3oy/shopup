import React, { useState } from "react";
import { Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import { white } from "../styles/theme";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";

let { width } = Dimensions.get("window");

export default function CarouselApp(props) {
  let [slideIndex, setSlideIndex] = useState(0);

  let campaignData = [
    {
      productName: "Nike React 112",
      campaign: "Feel Real Comfort",
      description:
        "Nike React is cratfed to put you inside your new track. With comfort in mind.",
      price: 125,
      image: require("../images/1.png"),
      bgColor: ["#0ba360", "#3cba92"],
    },
    {
      productName: "Nike React 113",
      campaign: "Feel Real Comfort",
      description:
        "Nike React is cratfed to put you inside your new track. With comfort in mind.",
      price: 125,
      image: require("../images/1.png"),
      bgColor: ["#4facfe", "#00f2fe"],
    },
    {
      productName: "Nike React 114",
      campaign: "Feel Real Comfort",
      description:
        "Nike React is cratfed to put you inside your new track. With comfort in mind.",
      price: 125,
      image: require("../images/1.png"),
      bgColor: ["#5f72bd", "#9b23ea"],
    },
  ];
  return (
    <View
      style={{
        marginVertical: 30,
        width: width,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -20,
      }}
    >
      <Carousel
        data={campaignData}
        renderItem={({ item, index }) => {
          return (
            <LinearGradient
              style={{
                // backgroundColor: item.bgColor,
                width: "100%",
                height: 180,
                borderRadius: 10,
                padding: 15,
              }}
              colors={item.bgColor}
            >
              <TouchableOpacity
                onPress={() => props.nav.navigate("Product", item)}
              >
                <Text
                  style={{ fontSize: 20, color: white, fontWeight: "bold" }}
                >
                  {item.productName}
                </Text>
                <Text
                  style={{ fontSize: 15, color: white, fontWeight: "bold" }}
                >
                  {item.campaign}
                </Text>
                <View
                  style={{
                    marginTop: -10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <View>
                    <Text
                      style={{ color: white, fontSize: 13, fontWeight: "600" }}
                    >
                      &cent;{item.price}.00
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={item.image}
                      style={{ width: 200, height: 120, marginRight: -40 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          );
        }}
        sliderWidth={width}
        itemWidth={width - 40}
        hasParallaxImages={true}
        onBeforeSnapToItem={(slide) => setSlideIndex(slide)}
        autoplay={true}
        loop={true}
        autoplayInterval={5000}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        {campaignData.map((each, index) => {
          return (
            <View
              key={index}
              style={{
                width: slideIndex == index ? 10 : 8,
                height: slideIndex == index ? 10 : 8,
                borderRadius: 10,
                backgroundColor: slideIndex == index ? "gray" : "lightgray",
                margin: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

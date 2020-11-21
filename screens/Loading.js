import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from "react-native";

let { width, height } = Dimensions.get("window");

export default function Loading(props) {
  return (
    <View style={styles.container}>
     <StatusBar
            hidden={true}
          />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View
            style={{
              width: 100,
              height: 30,
              borderRadius: 10,
              backgroundColor: "lightgray",
            }}
          />
          <View
            style={{
              width: 50,
              height: 30,
              borderRadius: 10,
              backgroundColor: "lightgray",
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "lightgray",
            width: "100%",
            height: 180,
            borderRadius: 10,
            padding: 15,
            marginVertical: 20,
          }}
        />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          {[1, 2, 3].map((each, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 10,
                  backgroundColor: "lightgray",
                  margin: 5,
                }}
              />
            );
          })}
        </View>
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
                width: 100,
                height: 30,
                borderRadius: 10,
                backgroundColor: "lightgray",
              }}
            />

            <View
              style={{
                width: 100,
                height: 30,
                borderRadius: 10,
                backgroundColor: "lightgray",
              }}
            />
          </View>
          <View style={{ marginTop: 15, marginBottom: 20 }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[1, 2, 3]}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      width: 150,
                      height: 220,
                      borderRadius: 10,
                      alignItems: "center",
                      padding: 5,
                      marginRight: 10,
                      backgroundColor: "lightgray",
                    }}
                  ></View>
                );
              }}
            />
          </View>
        </View>
        <ActivityIndicator
          size={30}
          color="lightgray"
          style={{ marginTop: 2 }}
        />
      </ScrollView>

      <View
        style={{
          height: height,
          width: width,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: width,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

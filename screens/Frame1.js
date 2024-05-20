import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border } from "./GlobalStyles";

const Frame1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={[styles.text, styles.textTypo]}>{`모두의 
      휘트니스`}</Text>
      <Image
        style={styles.child}
        contentFit="cover"
        source={require("./assets/Eclipse_0.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Frame")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.text1, styles.textTypo]}>시작하기</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  groupChildLayout: {
    height: 55,
    width: 143,
    position: "absolute",
  },
  text: {
    marginLeft: -105,
    top: 260,
    left: "50%",
    fontSize: 48,
    width: 210,
    height: 151,
  },
  child: {
    ImageAlign:"center",
    top: 208,
    left: 59,
    width: 240,
    height: 240,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 5,
  },
  text1: {
    top: 13,
    left: 26,
    fontSize: 24,
  },
  rectangleParent: {
    top: 510,
    left: 109,
  },
  view: {
    backgroundColor: Color.primary,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Frame1;


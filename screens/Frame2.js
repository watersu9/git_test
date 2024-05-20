import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "./GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.child, styles.childBorder]} />
      <Text style={[styles.signInWith, styles.signTypo]}>
        Sign in with Kakao
      </Text>
      <View style={[styles.item, styles.childBorder]} />
      <View style={[styles.inner, styles.childBorder]} />
      <View style={[styles.rectangleView, styles.childBorder]} />
      <Text style={[styles.signInWith1, styles.signTypo]}>
        Sign in with Google
      </Text>
      <View style={[styles.child1, styles.childBorder]} />
      <View style={[styles.child2, styles.childBorder]} />
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      <Text style={styles.logIn}>Log In</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("./assets/icon.png")}
      />
      <Image
        style={styles.child3}
        contentFit="cover"
        source={require("./assets/icon.png")}
      />
      <Image
        style={styles.child4}
        contentFit="cover"
        source={require("./assets/icon.png")}
      />
      <Text style={[styles.signInWith2, styles.signTypo]}>
        Sign in with Naver
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    height: 48,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  signTypo: {
    height: 27,
    width: 162,
    left: 113,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  emailTypo: {
    height: 20,
    left: 65,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  child: {
    top: 644,
    width: 259,
    left: 51,
    height: 48,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  signInWith: {
    top: 659,
  },
  item: {
    top: 315,
    width: 259,
    left: 51,
    height: 48,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  inner: {
    top: 406,
    width: 259,
    left: 51,
    height: 48,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    top: 578,
    width: 259,
    left: 51,
    height: 48,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  signInWith1: {
    top: 593,
  },
  child1: {
    top: 710,
    width: 259,
    left: 51,
    height: 48,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  child2: {
    top: 492,
    left: 106,
    backgroundColor: Color.colorGainsboro,
    width: 149,
    height: 48,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
  },
  email: {
    top: 295,
    width: 46,
  },
  password: {
    top: 386,
    width: 81,
  },
  logIn: {
    top: 506,
    left: 158,
    width: 63,
    height: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  ellipseIcon: {
    top: 80,
    left: 93,
    width: 175,
    height: 175,
    position: "absolute",
  },
  child3: {
    top: 185,
    left: 112,
    width: 138,
    height: 92,
    position: "absolute",
  },
  child4: {
    top: 107,
    left: 150,
    width: 60,
    height: 60,
    position: "absolute",
  },
  signInWith2: {
    top: 724,
  },
  view: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Frame2;

import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "./GlobalStyles";

const Frame = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{`어서오세요!
서비스 사용을 위한
회원가입을 진행합니다.`}</Text>
      <Pressable
        style={[styles.child, styles.itemLayout]}
        onPress={() => navigation.navigate("Screen1")}
      />
      <Text style={[styles.text1, styles.textTypo]}>회원가입</Text>
      <Pressable
        style={[styles.item, styles.itemLayout]}
        onPress={() => navigation.navigate("Frame2")}
      />
      <Text style={[styles.text2, styles.textTypo]}>로그인</Text>
      <Image
        style={styles.action1Icon}
        contentFit="cover"
        source={require("./assets/action_1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 54,
    width: 286,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -163,
    top: 123,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 325,
    height: 151,
    textAlign: "left",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  child: {
    marginLeft: -143,
    top: 484,
  },
  text1: {
    marginLeft: -52,
    top: 495,
    width: 106,
    height: 39,
  },
  item: {
    marginLeft: -144,
    top: 560,
  },
  text2: {
    marginLeft: -37,
    top: 576,
    width: 130,
    height: 38,
  },
  action1Icon: {
    top: 291,
    left: 106,
    width: 145,
    height: 138,
    position: "absolute",
  },
  view: {
    backgroundColor: Color.colorWhite,
    width: 360,
    height: 800,
    overflow: "hidden",
  },
});

export default Frame;


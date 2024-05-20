import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "./GlobalStyles";

const Screen1 = () => {
  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
    >
      <Text style={styles.text}>{`환영합니다!
몇가지 개인정보들을
작성해주세요`}</Text>
      <Text style={styles.text1}>닉네임</Text>
      <View style={[styles.child, styles.itemLayout]} />
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.inner, styles.innerPosition]} />
      <View style={[styles.rectangleView, styles.itemLayout]} />
      <Text style={[styles.text2, styles.textPosition]}>전화번호</Text>
      <Text style={[styles.text3, styles.textPosition]}>이메일</Text>
      <Text style={[styles.text4, styles.text4Typo]}>
        아래 내용에 모두 동의합니다.
      </Text>
      <View style={[styles.child1, styles.childLayout2]} />
      <View style={[styles.child2, styles.childBorder]} />
      <Text style={[styles.text5, styles.textTypo3]}>남은 시간 3:00</Text>
      <Text style={[styles.text6, styles.textTypo3]}>인증 받기</Text>
      <Text style={[styles.text7, styles.textTypo2]}>
        *휴대폰 번호를 입력해 주세요.
      </Text>
      <Text style={[styles.text8, styles.textTypo1]}>
        *이메일 주소를 입력해 주세요.
      </Text>
      <Text style={[styles.text9, styles.textTypo2]}>
        *생년월일을 입력해 주세요.
      </Text>
      <Text style={[styles.text10, styles.textTypo1]}>
        *닉네임을 입력해 주세요.
      </Text>
      <View style={[styles.child3, styles.childBorder]} />
      <Image
        style={[styles.polygonIcon, styles.navercomPosition]}
        contentFit="cover"
        source={require("./assets/polygon-1.png")}
      />
      <Text style={[styles.navercom, styles.navercomPosition]}>naver.com</Text>
      <Text style={styles.text11}>생년월일</Text>
      <View style={[styles.child4, styles.innerBorder]} />
      <View style={[styles.child5, styles.childLayout1]} />
      <View style={[styles.child6, styles.childLayout1]} />
      <Text style={[styles.text12, styles.textTypo]}>
        개인정보 이용약관 동의
      </Text>
      <Text style={[styles.text13, styles.textTypo]}>
        마케팅 정보 수신 동의
      </Text>
      <View style={[styles.child7, styles.childLayout]} />
      <View style={[styles.child8, styles.childLayout]} />
      <View style={[styles.child9, styles.childLayout]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 42,
    width: 329,
    borderWidth: 1,
    borderColor: Color.primary,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 17,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  innerPosition: {
    top: 521,
    height: 42,
  },
  textPosition: {
    height: 26,
    left: 17,
    color: Color.colorBlack,
    position: "absolute",
  },
  text4Typo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  childLayout2: {
    height: 29,
    top: 439,
  },
  childBorder: {
    backgroundColor: Color.colorGainsboro,
    borderWidth: 1,
    borderColor: Color.primary,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo3: {
    fontSize: FontSize.size_3xs,
    top: 447,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo2: {
    height: 37,
    width: 154,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo1: {
    left: 30,
    height: 37,
    width: 154,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  navercomPosition: {
    top: 533,
    position: "absolute",
  },
  innerBorder: {
    width: 329,
    borderRadius: Border.br_3xs,
    left: 17,
    borderWidth: 1,
    borderColor: Color.primary,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  childLayout1: {
    height: 52,
    width: 294,
    left: 35,
    borderWidth: 1,
    borderColor: Color.primary,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    width: 120,
    left: 35,
    fontSize: FontSize.size_xs,
    height: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  childLayout: {
    height: 12,
    width: 12,
    left: 317,
    borderWidth: 1,
    borderColor: Color.primary,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  text: {
    top: 60,
    left: 22,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 314,
    height: 124,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text1: {
    top: 227,
    width: 67,
    height: 24,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 19,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  child: {
    top: 433,
  },
  item: {
    top: 258,
  },
  inner: {
    width: 329,
    borderRadius: Border.br_3xs,
    left: 17,
    borderWidth: 1,
    borderColor: Color.primary,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    top: 343,
  },
  text2: {
    top: 400,
    width: 105,
    height: 26,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  text3: {
    top: 488,
    width: 105,
    height: 26,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  text4: {
    top: 584,
    width: 267,
    height: 26,
    left: 17,
    color: Color.colorBlack,
    position: "absolute",
  },
  child1: {
    left: 199,
    borderRadius: Border.br_mini,
    width: 141,
    borderWidth: 1,
    borderColor: Color.primary,
    borderStyle: "solid",
    height: 29,
    top: 439,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  child2: {
    left: 278,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    width: 63,
    height: 29,
    top: 439,
  },
  text5: {
    left: 208,
    width: 68,
    height: 10,
  },
  text6: {
    left: 288,
    width: 45,
    height: 9,
  },
  text7: {
    top: 444,
    left: 31,
  },
  text8: {
    top: 534,
  },
  text9: {
    top: 356,
    left: 32,
  },
  text10: {
    top: 270,
  },
  child3: {
    left: 239,
    borderTopRightRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_3xs,
    width: 107,
    top: 521,
    height: 42,
  },
  polygonIcon: {
    left: 320,
    width: 15,
    height: 15,
  },
  navercom: {
    left: 250,
    color: "rgba(0, 0, 0, 0.6)",
    width: 103,
    height: 28,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  text11: {
    top: 314,
    width: 113,
    height: 35,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 19,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  child4: {
    top: 607,
    height: 166,
  },
  child5: {
    top: 632,
  },
  child6: {
    top: 712,
  },
  text12: {
    top: 615,
  },
  text13: {
    top: 692,
  },
  child7: {
    top: 585,
  },
  child8: {
    top: 615,
  },
  child9: {
    top: 692,
  },
  scrollview: {
    width: 360,
    overflow: "hidden",
    flex: 1,
    maxWidth: 360,
    backgroundColor: Color.colorWhite,
  },
});

export default Screen1;


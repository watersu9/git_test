import * as React from "react";
import { useState } from "react";
import { ScrollView, Text, StyleSheet, View, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "./GlobalStyles";

const Screen1 = () => {
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");

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
      <TextInput
        style={[styles.textInput, styles.itemLayout,{top : 259}]}
        onChangeText={setNickname}
        value={nickname}
        placeholder="닉네임을 입력해 주세요"
      />
      <Text style={[styles.text2, styles.textPosition]}>전화번호</Text>
      <TextInput
        style={[styles.textInput, styles.itemLayout, { top: 433 }]}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="전화번호를 입력해 주세요"
        keyboardType="phone-pad"
      />
      <Text style={[styles.text3, styles.textPosition]}>이메일</Text>
      <TextInput
        style={[styles.textInput, styles.itemLayout, { top: 521 }]}
        onChangeText={setEmail}
        value={email}
        placeholder="이메일을 입력해 주세요"
        keyboardType="email-address"
      />
      <Text style={styles.text11}>생년월일</Text>
      <TextInput
        style={[styles.textInput, styles.itemLayout, { top: 343 }]}
        onChangeText={setBirthdate}
        value={birthdate}
        placeholder="생년월일을 입력해 주세요"
      />
      <Text style={[styles.text4, styles.text4Typo]}>
        아래 내용에 모두 동의합니다.
      </Text>
      <View style={[styles.child1, styles.childLayout2]} />
      <View style={[styles.child2, styles.childBorder]} />
      <Text style={[styles.text5, styles.textTypo3]}>남은 시간 3:00</Text>
      <Text style={[styles.text6, styles.textTypo3]}>인증 받기</Text>
      
      <View style={[styles.child3, styles.childBorder]} />
      <Image
        style={[styles.polygonIcon, styles.navercomPosition]}
        contentFit="cover"
        source={require("./assets/polygon.png")}
      />
      <Text style={[styles.navercom, styles.navercomPosition]}>naver.com</Text>
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
    paddingHorizontal: 10,
  },
  textInput: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
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
  scrollview: {
    width: 360,
    overflow: "hidden",
    flex: 1,
    maxWidth: 360,
    backgroundColor: Color.colorWhite,
  },
});

export default Screen1;




import { router } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import heart from "../assets/coracao.gif";
import flower from "../assets/rosa.gif";
import bg from "../assets/teamo.jpg";
import BouncingImage from "../components/BouncingImage";

export default function Accept() {
  const handleOpenVideo = async () => {
    const URL = "https://youtu.be/6w3uAKabfFg?si=R_1SFavXiBoPOuWU";
    const supported = await Linking.canOpenURL(URL);

    if (supported) {
      await Linking.openURL(URL);
    } else {
      console.log("Don't know how to open this URL: " + URL);
    }
  };

  return (
    <ImageBackground
      className="flex-1 overflow-hidden"
      source={bg}
      style={{
        height: "auto",
        width: "auto",
      }}
    >
      <View className="flex-1 items-center justify-center bg-black/40 gap-8 px-2">
        <TouchableOpacity onPress={handleOpenVideo} activeOpacity={0.7}>
          <Image
            source={flower}
            style={{
              height: 384,
              width: 384,
            }}
          />
        </TouchableOpacity>
        <View className="flex-col justify-center items-center gap-10">
          <Text className="text-yellow-300 text-xl font-bold">
            TE AMOOOOOOOOOOOOOOOOOOOO DEMAIS AMOR
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <BouncingImage source={heart} />
          </TouchableOpacity>
        </View>
        <Text className="text-red-600 text-2xl font-bold absolute bottom-0 left-0 m-1">
          FEITO POR: BENIO AMOR DA SUA VIDA
        </Text>
      </View>
    </ImageBackground>
  );
}

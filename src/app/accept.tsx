import React from "react";
import {
  Image,
  ImageBackground,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import flower from "../assets/rosa.gif";
import bg from "../assets/teamo.jpg";

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
    <ImageBackground className="flex-1" resizeMode="cover" source={bg}>
      <View className="flex-1 items-center justify-center bg-black/40 gap-32 px-2">
        <TouchableOpacity onPress={handleOpenVideo} activeOpacity={0.7}>
          <Image source={flower} className="h-96 w-96" />
        </TouchableOpacity>
        <Text className="text-yellow-300 text-xl font-bold">
          TE AMOOOOOOOOOOOOOOOOOOOO DEMAIS AMOR
        </Text>
        <Text className="text-red-600 text-2xl font-bold absolute bottom-0 left-0 m-1">
          FEITO POR: BENIO AMOR DA SUA VIDA
        </Text>
      </View>
    </ImageBackground>
  );
}

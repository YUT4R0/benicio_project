import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import boi from "../assets/boi.jpeg";
import eueraymorango from "../assets/eueraymorango.jpg";
import euerayshrek from "../assets/euerayshrek.jpg";
import gato from "../assets/gato.jpg";
import pfv from "../assets/porfavor.jpeg";
import shrek from "../assets/shrek.jpg";
import shrekaranha from "../assets/shrekaranha.jpg";
import bg from "../assets/teamo.jpg";
import { Button } from "../components/Button";

export default function Home() {
  const router = useRouter();
  const [denyButtonPosition, setDenyButtonPosition] = useState({
    right: 0,
    top: 0,
  });
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  function handleDeny() {
    const buttonWidth = 160;
    const buttonHeight = 64;

    const randomX = Math.random() * (screenWidth - buttonWidth) * 0.7;
    const randomY = Math.random() * (screenHeight - buttonHeight) * 0.7;

    setDenyButtonPosition({ right: randomX, top: randomY });
  }

  return (
    <ImageBackground className="flex-1" resizeMode="cover" source={bg}>
      <View className="flex-1 items-center bg-black/40 px-10 py-20 gap-10">
        <Text className="text-yellow-300 text-xl font-bold">
          oi rayyyyy ❤️❤️❤️❤️❤️❤️❤️
        </Text>
        <View className="flex-row items-center">
          <Text className="text-red-500 text-xl font-bold">namora cmg?</Text>
          <Image source={pfv} className="h-20 w-20" />
        </View>
        <View className="w-full items-center justify-between flex-row">
          <Button
            title="SIM!!"
            type="accept"
            onPress={() => router.push("/accept")}
          />
          <View
            style={{
              position: "absolute",
              right: denyButtonPosition.right,
              top: denyButtonPosition.top,
            }}
          >
            <Button title="não😡😡" onPress={handleDeny} type="deny" />
          </View>
        </View>
        <Text className="text-yellow-300 text-lg">aceitaaaaaaaaa</Text>
        <View className="flex-row items-center gap-3">
          <Image source={boi} className="h-36 w-36" />
          <Image source={gato} className="h-36 w-36" />
          <Image source={shrek} className="h-36 w-36" />
        </View>
        <View className="flex-row items-center gap-3">
          <Image source={shrekaranha} className="h-36 w-36" />
          <Image source={eueraymorango} className="h-36 w-36" />
          <Image source={euerayshrek} className="h-36 w-36" />
        </View>
        <Text className="text-red-600 text-2xl font-bold absolute bottom-0 left-0 m-1">
          FEITO POR: BENIO AMOR DA SUA VIDA
        </Text>
      </View>
    </ImageBackground>
  );
}

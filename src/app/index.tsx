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
import Gallery from "../components/Gallery";

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
    <ImageBackground
      className="flex-1 overflow-hidden"
      source={bg}
      style={{
        height: "auto",
        width: "auto",
      }}
    >
      <View className="flex-1 items-center bg-black/40 px-10 py-10 gap-7">
        <Text className="text-yellow-300 text-xl font-bold">
          oi rayyyyy ❤️❤️❤️❤️❤️❤️❤️
        </Text>
        <View className="flex-row items-center">
          <Text className="text-red-500 text-xl font-bold">namora cmg? </Text>
          <Image
            source={pfv}
            style={{
              height: 80,
              width: 80,
            }}
          />
        </View>
        <View
          className="w-full items-center justify-between flex-row"
          style={{
            position: "relative",
            zIndex: 100,
          }}
        >
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
        <Gallery img1={boi} img2={gato} img3={shrek} />
        <Gallery img1={shrekaranha} img2={eueraymorango} img3={euerayshrek} />
        <Text className="text-red-600 text-2xl font-bold absolute bottom-0 left-0 m-1">
          FEITO POR: BENIO AMOR DA SUA VIDA
        </Text>
      </View>
    </ImageBackground>
  );
}

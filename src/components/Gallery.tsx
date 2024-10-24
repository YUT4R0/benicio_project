import React from "react";
import { ImageSourcePropType, View } from "react-native";
import RotatingImage from "./RotatingImage";

type Props = {
  img1: ImageSourcePropType;
  img2: ImageSourcePropType;
  img3: ImageSourcePropType;
};

export default function Gallery({ img1, img2, img3 }: Props) {
  return (
    <View className="flex-row items-center gap-2">
      <RotatingImage source={img1} />
      <RotatingImage source={img2} />
      <RotatingImage source={img3} />
    </View>
  );
}

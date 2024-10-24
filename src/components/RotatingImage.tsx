import { useEffect, useRef } from "react";
import { Animated, ImageSourcePropType } from "react-native";

export default function RotatingImage({
  source,
}: {
  source: ImageSourcePropType;
}) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      rotateAnim.setValue(0);
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(rotateAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();
  }, [rotateAnim]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["-15deg", "15deg"],
  });

  return (
    <Animated.Image
      source={source}
      style={{
        width: 128,
        height: 128,
        aspectRatio: 1,
        transform: [{ rotate: rotateInterpolate }],
      }}
    />
  );
}

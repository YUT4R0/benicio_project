import React, { useEffect, useRef } from "react";
import { Animated, ImageSourcePropType } from "react-native";

export default function BouncingImage({
  source,
}: {
  source: ImageSourcePropType;
}) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const startAnimation = () => {
      scaleAnim.setValue(1);
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.5, // Scale up to 120%
            duration: 400, // Duration for scaling up
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1, // Scale back to 100%
            duration: 400, // Duration for scaling down
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();
  }, [scaleAnim]);

  return (
    <Animated.Image
      source={source}
      style={{
        width: 100, // Set your desired width
        height: 100, // Set your desired height
        transform: [{ scale: scaleAnim }],
      }}
    />
  );
}

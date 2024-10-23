import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  type: "accept" | "deny";
};

export function Button({ title, isLoading = false, type, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      disabled={isLoading}
      activeOpacity={type === "accept" ? 0.7 : 1}
      className={
        "w-40 h-16 bg-gray-100 justify-center items-center rounded-full border-2 border-black z-10"
      }
    >
      {isLoading ? (
        <ActivityIndicator className="text-black" />
      ) : (
        <Text className="text-black uppercase text-base">{title}</Text>
      )}
    </TouchableOpacity>
  );
}

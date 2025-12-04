import { Colors } from "@/constants/Colors";
import { globalstyles } from "@/styles/global-styles";
import { Pressable, Text } from "react-native";
import * as Haptics from 'expo-haptics';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

function CalculatorButton({
  label,
  color = Colors.darkgray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) {
  return (

    <Pressable
      style={({ pressed }) => ({
        ...globalstyles.Button,
        backgroundColor: color,
        opacity: pressed ? 0.8: 1,

        width: doubleSize ? 180 : 80,
      })}
      onPress={()=>{
        Haptics.selectionAsync();
      


        onPress();
      }}
    >
      <Text
        style={{
          ...globalstyles.ButtonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default CalculatorButton;
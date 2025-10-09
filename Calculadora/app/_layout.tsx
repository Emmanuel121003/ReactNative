import { Text, View } from "react-native";
import { Slot } from "expo-router";
const RootLayout = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>RootLayout</Text>
      <Slot/>
    </View>
  );
}
export default RootLayout;
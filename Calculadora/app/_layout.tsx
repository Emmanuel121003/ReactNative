import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { globalstyles } from "@/styles/global-styles";
const RootLayout = () => {

  const [Loaded] = useFonts({
    "BBHSansHegarty-Regular": require("../assets/fonts/BBH.ttf"),
   
  });
  if (!Loaded) {
    return null;
  }

  return (
    <View style={globalstyles.Background}>
      <Slot/> 

      <StatusBar style="light" />
    </View>
  );
}
export default RootLayout;
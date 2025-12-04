
import { globalstyles } from "@/styles/global-styles";  
import { Children } from "react";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";

} 

const ThemeText = ({children,variant="h1", ...rest}: Props) => {
    return (
        <Text style={[{color: 'white', fontFamily: 'BBHSansHegarty-Regular'}, 
            variant=== 'h1' && globalstyles.mainResult,
            variant=== 'h2' && globalstyles.subResult
        ]}
        numberOfLines={1}
        adjustsFontSizeToFit
        {...rest}
          >{children}
        
        </Text>
    )
}
export default ThemeText;

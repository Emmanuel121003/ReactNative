import { Colors } from "@/constants/Colors";
import { Button } from "@react-navigation/elements";
import { StyleSheet } from "react-native";

export const globalstyles = StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: Colors.Background,
    },
    CalculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
    },
    mainResult: {
        fontSize: 70,
        color: Colors.textprimary,
        textAlign: 'right',
        fontWeight: '400',
        fontFamily: 'BBHSansHegarty-Regular',


    },
    subResult: {
        fontSize: 40,
        color: Colors.textsecundary,
        textAlign: 'right',
        fontWeight: '300',
        fontFamily: 'BBHSansHegarty-Regular',

     }, 
     row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
     }, 
     Button:{
        width: 80,
        height: 80,
        marginHorizontal: 10,
        backgroundColor: Colors.darkgray,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
     },
     ButtonText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textprimary,
        fontWeight: '400',
        fontFamily: 'BBHSansHegarty-Regular',
     }
});
  
    
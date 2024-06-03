import { View,StyleSheet } from "react-native";
import {
    GluestackUIProvider,
    Center,
    HStack,
    Button,
    ButtonText,
    Text,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"
import { increaseCounter, decreaseCounter } from "../redux/counterSlice";
import ColorModeSwitch from "../components/ColorModeSwitch";
import { useTheme } from '@react-navigation/native';
import { setLogout } from "../redux/accountSlice"
const SettingScreen = () => {
    // Get states from store
    const colorMode = useSelector(selectColorMode);
    const { colors } = useTheme();
    // Define a dispatch to send actions
    const dispatch = useDispatch();

    return (
        <GluestackUIProvider config={config}>
            <View style={{ backgroundColor: colorMode == "light" ? "white" : "#232323",height:'100%'}}>
            <Center  bg={colorMode == "light" ? "white" : "#232323"}>
                    <ColorModeSwitch />
                    <Button
                        padding={1}
                        backgroundColor={colorMode === "light" ? "white" : "#232323"}
                        borderColor={"black"}
                        onPress={() => dispatch(setLogout())}
                        marginTop={675}
                    >
                        <ButtonText fontSize={16} fontWeight='500' color='red' textAlign='center' lineHeight={20} margin={10}>
                            登出
                        </ButtonText>
                    </Button>
                </Center>
            </View>
        </GluestackUIProvider>
    );
};

export default SettingScreen;
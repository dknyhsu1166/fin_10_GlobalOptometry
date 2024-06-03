import { HStack, Text, Switch } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { selectColorMode } from "../../redux/counterSlice";
import { toggleColorMode } from "../../redux/counterSlice";
import { Platform} from "react-native";
import { Center } from "native-base";
import { View, Image, Pressable } from "react-native";

const ColorModeSwitch = () => {
    // Get states from store
    const colorMode = useSelector(selectColorMode);

    // Define a dispatch to send actions
    const dispatch = useDispatch();

    return (
        <HStack borderRadius={10} mt={25} space={8} alignItems="center" backgroundColor={colorMode == "dark" ? "#363636" : "#ECECEC"}>
            <Text marginRight={150} marginLeft={20} marginTop={Platform.OS === 'ios' ? 8 : 0} marginBottom={Platform.OS === 'ios' ? 8 : 0} size="lg" px="$2" color={colorMode == "dark" ? "white" : "black"}>
                    {colorMode == "dark" ? "夜間模式" : "日間模式"}
                </Text>

            <Switch
                    marginTop={Platform.OS === 'ios' ? 8 : 0}
                    marginBottom={Platform.OS === 'ios' ? 8 : 0}
                    marginRight={20}
                    name="light Mode"
                    value={colorMode === "dark"}
                    onToggle={() => dispatch(toggleColorMode())}
                    accessibilityLabel="display-mode"
                    accessibilityHint="light or dark mode"
                />
        </HStack>
    );
};

export default ColorModeSwitch;
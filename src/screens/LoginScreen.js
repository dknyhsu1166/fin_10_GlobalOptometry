import {
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Input,
    InputField,
    Link,
    LinkText,
    Button,
    ButtonText,
    HStack,
    Center,
    Pressable,
    Image
} from "@gluestack-ui/themed";
import { useState, useEffect } from "react";
import { Appearance, useColorScheme } from "react-native";
import { useLogin } from "../tanstack-query";
import { gotoSignUp } from "../redux/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"

const LoginScreen = () => {
    const { mutate, data, isSuccess, isError, error } = useLogin();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const colorScheme = useColorScheme();
    const colorMode = useSelector(selectColorMode);
    return (
        <Center
            w="100%"
            flex={1}
            backgroundColor={colorMode == "light" ? "white" : "#232323"}
        >
            <Box
                backgroundColor={colorMode == "light" ? "white" : "#232323"}
                safeArea
                p="$2"
                py="$8"
                w="$90%"
                maxW="$290"
            >
                <Center>
                {colorMode === "light" ? (
                    <Image
                        source={require('../images/logo_black.png')}
                        style={{
                            width: 300, height: 100,
                            marginBottom: 15,
                            marginTop: 30,
                        }}
                        alt="logo pic"
                    />
                ) : (
                    <Image
                        source={require('../images/logo_white.png')}
                        style={{
                            width: 300, height: 100,
                            marginBottom: 15,
                            marginTop: 30,
                        }}
                        alt="logo pic"
                    />
                )}
                </Center>
                <VStack space={3} mt="$10">
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText
                                marginTop={-15}
                                marginBottom={6}
                                color={colorMode == "light" ? "#232323" : "white"}>電子信箱</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                color={colorMode == "light" ? "#232323" : "white"}
                                type="email"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                            />
                        </Input>
                    </FormControl>
                    <FormControl>
                        <FormControlLabel>
                            <FormControlLabelText
                                marginTop={10}
                                marginBottom={6}
                                color={colorMode == "light" ? "#232323" : "white"}>
                                密碼</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField
                                color={colorMode == "light" ? "#232323" : "white"}
                                type="password"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </Input>
                    </FormControl>
                    <Button marginTop={40} onPress={() => mutate({ email, password })}>
                        <ButtonText>登入</ButtonText>
                    </Button>
                    <HStack marginTop={15} justifyContent="center">
                        <Text size="$sm" color={colorMode == "light" ? "#666666" : "#EDEDEF"}>還沒有帳號嗎？ </Text>
                        <Pressable
                            onPress={() => {
                                dispatch(gotoSignUp());
                            }}
                        >
                            <Text underline="true" fontWeight="medium" size="$sm" color={colorMode == "light" ? "#666666" : "#EDEDEF"}>
                                註冊
                            </Text>
                        </Pressable>
                    </HStack>
                    <Text
                        mt="$5"
                        fontWeight="medium"
                        size="$xs"
                        textAlign="center"
                        sx={{
                            _dark: {
                                color: "pink",
                            },
                            _light: {
                                color: "darkred",
                            },
                        }}
                    >
                        {error?.message}
                    </Text>
                </VStack>
            </Box>
        </Center>
    );
};

export default LoginScreen;
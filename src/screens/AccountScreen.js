import {
    Box,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    VStack,
    HStack,
    Input,
    InputField,
    Center,
} from "@gluestack-ui/themed";
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Platform } from "react-native";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"

const AccountScreen = () => {
    const colorMode = useSelector(selectColorMode);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [adrs, setAdrs] = useState("");
    const [tel, setTel] = useState("");
    const [birthdayYear, setBirthdayYear] = useState("");
    const [birthdayMonth, setBirthdayMonth] = useState("");
    const [birthdayDay, setBirthdayDay] = useState("");
    console.log(name, birthdayYear, birthdayMonth, birthdayDay, tel, adrs, email);
    return (
        <ScrollView backgroundColor={colorMode == "light" ? "white" : "#232323"} height={'100%'}>

            <VStack space={2} mt={5} width="80%" alignSelf="center" marginTop={40}>
                <FormControl mb={20} isRequired>
                    <FormControlLabel>
                        <FormControlLabelText color={colorMode === "light" ? "black" : "white"}>姓名</FormControlLabelText>
                    </FormControlLabel>
                    <Input variant="underlined">
                        <InputField
                            placeholder="請輸入您的姓名"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </Input>
                </FormControl>
                <FormControl mb={20} isRequired>
                    <FormControlLabel>
                        <FormControlLabelText color={colorMode === "light" ? "black" : "white"}>生日</FormControlLabelText>
                    </FormControlLabel>
                    <Center>
                        <HStack space="1" marginTop={8}>
                            <Input variant="rounded" mt={5} width={100} mr={15}>
                                <InputField
                                    placeholder="民國"
                                    value={birthdayYear}
                                    onChangeText={(text) => setBirthdayYear(text)}
                                />
                            </Input>
                            <Input variant="rounded" mt={5} width={100} mr={15}>
                                <InputField
                                    placeholder="月"
                                    value={birthdayMonth}
                                    onChangeText={(text) => setBirthdayMonth(text)}
                                />
                            </Input>
                            <Input variant="rounded" mt={5} width={100}>
                                <InputField
                                    placeholder="日"
                                    value={birthdayDay}
                                    onChangeText={(text) => setBirthdayDay(text)}
                                />
                            </Input>
                        </HStack>
                    </Center>
                </FormControl>

                <FormControl mb={20} isRequired>
                    <FormControlLabel>
                        <FormControlLabelText color={colorMode === "light" ? "black" : "white"}>聯絡電話</FormControlLabelText>
                    </FormControlLabel>
                    <Input variant="underlined">
                        <InputField
                            placeholder="請輸入您的聯絡電話"
                            value={tel}
                            onChangeText={(text) => setTel(text)}
                        />
                    </Input>
                </FormControl>
                <FormControl mb={20}>
                    <FormControlLabel>
                        <FormControlLabelText color={colorMode === "light" ? "black" : "white"}>住址</FormControlLabelText>
                    </FormControlLabel>
                    <Input variant="underlined">
                        <InputField
                            placeholder="請輸入您的住址"
                            value={adrs}
                            onChangeText={(text) => setAdrs(text)}
                        />
                    </Input>
                </FormControl>
                <FormControl mb={20}>
                    <FormControlLabel>
                        <FormControlLabelText color={colorMode === "light" ? "black" : "white"}>電子信箱</FormControlLabelText>
                    </FormControlLabel>
                    <Input variant="underlined">
                        <InputField
                            placeholder="請輸入您的電子信箱"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </Input>
                </FormControl>
            </VStack>
        </ScrollView>
    );
};

export default AccountScreen;

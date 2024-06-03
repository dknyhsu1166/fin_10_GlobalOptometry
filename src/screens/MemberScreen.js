import React, { useEffect } from "react";
import { Image } from "react-native";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GluestackUIProvider, HStack, VStack,Center,Text } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import CircleCounter from '../components/CircleCounter';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"

const App = () => {
    const colorScheme = useColorScheme();
    const colorMode = useSelector(selectColorMode);
    return (
        <SafeAreaProvider>
            <GluestackUIProvider config={config} >
                <VStack height='100%' backgroundColor={colorMode == "light" ? "white" : "#232323"}>
                    <Center marginTop={30}>
                        <Center>
                            <Text fontSize={25} marginBottom={15} fontWeight="bold" color={colorMode == "light" ? "#232323" : 'white'}>
                                累積消費里程數
                            </Text>
                        </Center>
                        <HStack >
                            <CircleCounter size={100} count={3500} stroke_color={colorMode == "light" ? '#4338ca' : '#e0e7ff'} innerColor={colorMode == "light" ? "white" : '#232323'} />
                        </HStack>
                        <Text fontSize={25} marginTop={10} fontWeight="bold" color={colorMode == "light" ? "#232323" : 'white'}>
                            會員條碼
                        </Text>
                        <Image
                            source={require('../images/barcode.png')}
                            style={{ width: 350, height: 120, marginTop: 20 }}
                        />
                    </Center>
                </VStack>
            </GluestackUIProvider>
        </SafeAreaProvider>
    );
};

export default App;
import React from 'react';
import { useState } from "react";
import { View, Pressable } from 'react-native';
import { Center, HStack, VStack, ScrollView, Box, Text, Heading, Image, Button, ButtonText } from "@gluestack-ui/themed";
import { SelectList } from 'react-native-dropdown-select-list'
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../../redux/counterSlice"
import AddToCart from '../../components/AddToCart';

const DetailScreen = ({ route, navigation }) => {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    const [Lcounter, setLCounter] = useState(0);
    const [Rcounter, setRCounter] = useState(0);
    const qty = Lcounter + Rcounter;
    const {
        name,
        titlename,
        image,
        price,
        big,
        unit
    } = route.params;
    const data = [
        { key: '2', value: '-1.00' },
        { key: '3', value: '-1.25' },
        { key: '4', value: '-1.50' },
        { key: '5', value: '-1.75' },
        { key: '6', value: '-2.00' },
        { key: '8', value: '-2.25' },
        { key: '9', value: '-2.50' },
        { key: '10', value: '-2.75' },
        { key: '11', value: '-3.00' },
        { key: '12', value: '-3.25' },
        { key: '13', value: '-3.50' },
        { key: '14', value: '-3.75' },
        { key: '15', value: '-4.00' },
        { key: '16', value: '-4.25' },
        { key: '17', value: '-4.50' },
        { key: '18', value: '-4.75' },
        { key: '19', value: '-5.00' },
        { key: '20', value: '-5.25' },
        { key: '21', value: '-5.50' },
        { key: '22', value: '-5.75' },
        { key: '23', value: '-6.00' },
        { key: '24', value: '-6.50' },
        { key: '25', value: '-7.00' },
        { key: '26', value: '-7.50' },
        { key: '27', value: '-8.00' },
        { key: '28', value: '-8.50' },
        { key: '29', value: '-9.00' },

    ];
    const [selected, setSelected] = React.useState("");
    return (
        <ScrollView backgroundColor={colorMode == "light" ? "white" : "#232323"} width="100%">
            <Center backgroundColor={colorMode == "light" ? "white" : "#232323"} width="100%" height="100%" >
                <Box backgroundColor={colorMode == "light" ? "white" : "#232323"} width="80%" >

                    <Center width='100%' pl={5} pr={5}>
                        {big ? (
                            <Image
                                style={{ width: 250, height: 250, marginTop: 10 }}
                                source={{ uri: image }}
                                alt='Image'
                            />
                        ) : (
                            <Center>
                                <Text
                                    color={colorMode === "light" ? "black" : "white"}
                                    fontSize={24}
                                    lineHeight={28}
                                    marginBottom={20}
                                    fontWeight={'bold'}
                                >
                                    {titlename}
                                </Text>
                                <Image
                                    style={{ width: 100, height: 100, marginTop: 10 }}
                                    source={{ uri: image }}
                                    alt='Image'
                                />
                            </Center>
                        )}
                        <Text color={colorMode === "light" ? "black" : "white"} fontSize={24} lineHeight={28} fontWeight={'bold'} marginTop={25} >{name}</Text>
                        <HStack mt={-10} >
                            <Text color={colorMode === "light" ? "black" : "white"} marginTop={30} fontSize={24} fontWeight='bold' lineHeight={28}>{price}</Text>
                            <Text color={colorMode === "light" ? "black" : "white"} marginTop={30} fontSize={24} fontWeight='400' lineHeight={28}> / {unit}</Text>
                        </HStack>
                    </Center>

                    <Box width="100%">
                        <Text mt={20} mb={5} fontSize={18} fontWeight='400' color={colorMode === "light" ? "black" : "white"} lineHeight={28}>左眼度數</Text>

                        <HStack mt={5} marginBottom={15} >
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={data}
                                placeholder='選擇度數'
                                inputStyles={{ color: colorMode === "light" ? "black" : "white" }}
                                save="value"
                                search={false}
                                height={10}
                                lineHeight={25}
                                fontSize={14}
                                dropdownItemStyles={{ marginLeft: 10 }}
                                dropdownTextStyles={{ fontSize: 16, color: colorMode === "light" ? "black" : "white" }}
                            />

                            <HStack space="3xl" ml={160} position='absolute' >
                                <Button
                                    backgroundColor={colors.gray}
                                    onPress={() => setLCounter(Lcounter + 1)}
                                >
                                    <ButtonText size="xl" color="white">
                                        +
                                    </ButtonText>
                                </Button>
                                <Center>
                                    <Text fontSize={20} color={colorMode === "light" ? "black" : "white"} >
                                        {Lcounter}
                                    </Text>
                                </Center>
                                <Button backgroundColor={colors.gray}
                                    onPress={() => {
                                        if (Lcounter > 0) {
                                            setLCounter(Lcounter - 1);
                                        }
                                    }
                                    }
                                >
                                    <ButtonText size="xl" color="white">
                                        -
                                    </ButtonText>
                                </Button>
                            </HStack>
                        </HStack>
                        <Text mb={5} fontSize={18} fontWeight='400' color={colorMode === "light" ? "black" : "white"} lineHeight={28}>右眼度數</Text>
                        <HStack mt={5} marginBottom={15}>
                            <SelectList
                                setSelected={(val) => setSelected(val)}
                                data={data}
                                placeholder='選擇度數'
                                inputStyles={{ color: colorMode === "light" ? "black" : "white" }}
                                save="value"
                                search={false}
                                height={10}
                                lineHeight={25}
                                fontSize={14}
                                dropdownItemStyles={{ marginLeft: 10 }}
                                dropdownTextStyles={{ fontSize: 16, color: colorMode === "light" ? "black" : "white" }}
                            />

                            <HStack space="3xl" ml={160} position='absolute'>
                                <Button
                                    backgroundColor={colors.gray}
                                    onPress={() => setRCounter(Rcounter + 1)}
                                >
                                    <ButtonText size="xl" color="white">
                                        +
                                    </ButtonText>
                                </Button>
                                <Center>
                                    <Text fontSize={20} color={colorMode === "light" ? "black" : "white"} >
                                        {Rcounter}
                                    </Text>
                                </Center>
                                <Button backgroundColor={colors.gray}
                                    onPress={() => {
                                        if (Rcounter > 0) {
                                            setRCounter(Rcounter - 1);
                                        }
                                    }
                                    }
                                >
                                    <ButtonText size="xl" color="white">
                                        -
                                    </ButtonText>
                                </Button>
                            </HStack>
                        </HStack>

                        <Center marginTop={25} marginBottom={40}>
                            <AddToCart product={route.params} qty={qty} />
                        </Center>
                    </Box>
                </Box>
            </Center>
        </ScrollView>

    );
}

export default DetailScreen;

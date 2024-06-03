import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./style";
import { Center } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../../redux/counterSlice"

const HydronDetail = ({ lens, navigation }) => {
    const colorMode = useSelector(selectColorMode);
    return (
        <View style={{ flexDirection: 'column' }}>
            <Center>
                <View style={styles.cardContainerStyle}>
                    <View style={styles.cardSectionStyle}>
                        <Pressable
                            onPress={() => { navigation.navigate('HydronDetail', lens) }}
                        >
                            {lens.big ?
                                <Image
                                    style={styles.imageStyle}
                                    source={{ uri: lens.image }}
                                />
                                : <Image
                                    style={styles.image2Style}
                                    source={{ uri: lens.image }}
                                />
                            }

                        </Pressable>
                    </View>
                </View>
                <Text style={{
                    color: colorMode === "light" ? "black" : "white",
                    marginTop: 8,
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: 'bold',
                }}>{lens.name}</Text>
            </Center>
        </View>
    )
};

export default HydronDetail;
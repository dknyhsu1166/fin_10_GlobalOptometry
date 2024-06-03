import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../../redux/counterSlice"
const MainDetail = ({ lens, navigation }) => {
    const colorMode = useSelector(selectColorMode);
    const handlePress = () => {
        if (lens.navigation === 'camax') {
            navigation.navigate('CamaxMain',lens.data);
        } else if (lens.navigation === 'hydron') {
            navigation.navigate('HydronMain');
        }
    };

    return (
        <View style={{ flexDirection: 'column', backgroundColor: colorMode == "light" ? "white" : "#232323" }}>
            <View style={styles.cardContainerStyle}>
                <View style={styles.cardSectionStyle}>
                    <Pressable onPress={handlePress}>
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: lens.image }}
                        />
                    </Pressable>
                </View>
            </View>
            <View>
                <Text style={{
                    color: colorMode === "light" ? "black" : "white",
                    marginTop: 8,
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: 'bold',
                    marginLeft: 20
                }}>{lens.name}</Text>
                <Text style={{
                    color: colorMode === "light" ? "black" : "white",
                    marginBottom: 30,
                    fontSize: 14,
                    marginLeft: 20
                }}>{lens.series}</Text>
            </View>
        </View>
    )
};

export default MainDetail;

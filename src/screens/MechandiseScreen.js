import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Center } from '@gluestack-ui/themed';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"

const MachandiseScreen = ({ navigation }) => {
    const colorMode = useSelector(selectColorMode);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colorMode == "light" ? "white" : "#232323" }}>
            <View style={{marginBottom:20}}>
            <View style={styles.cardContainerStyle}>
                <View style={styles.cardSectionStyle}>
                    <Text style={styles.headerTitleStyle} > 海昌隱形眼鏡</Text>
                </View>
                    <Pressable
                        onPress={() => { navigation.navigate('Hydron') }}
                >
                    <Center>
                        <Image
                            style={styles.imageStyle1}
                            source={require("../images/brand1.jpg")}
                        />
                    </Center>
                    </Pressable>
                </View>
                
            <View style={styles.cardContainerStyle}>
                <View style={styles.cardSectionStyle}>
                    <Text style={styles.headerTitleStyle} > 加美隱形眼鏡</Text>
                </View>
                <Pressable
                    onPress={() => { navigation.navigate('Camax') }}
                >
                    <Center>
                    <Image
                        style={styles.imageStyle2}
                        source={require("../images/brand2.jpg")}
                        />
                    </Center>
                </Pressable>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 5,
        marginBottom:5,
    },
    cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "black",
        backgroundColor:'white',
        marginBottom:10,
        marginTop: 12,
        marginLeft: 30,
        marginRight: 30,
        height: 300,
        width: null,
    },
    cardSectionStyle: {
        padding: 10,
        backgroundColor: "#e0e7ff",
        borderColor: "black",
        borderBottomWidth: 0.5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imageStyle1: {
        height: 230,
        width: 280,
    },
    imageStyle2: {
        height: 200,
        width: 250,
        marginTop:20
    },
});

export default MachandiseScreen;
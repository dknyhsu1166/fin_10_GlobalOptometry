import React from 'react';
import { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Center , GluestackUIProvider, Box, View, Text, Image } from '@gluestack-ui/themed';
import { config } from "@gluestack-ui/config";
import { Dimensions, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import MyTheme from '../Theme';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"

const { width } = Dimensions.get('window');
export default function InfoScreen() {
    const [region, setRegion] = useState({
        longitude: 121.46352943385864,
        latitude: 25.082173756840707,
        longitudeDelta: 0.005,
        latitudeDelta: 0.005,
    });
    const colorMode = useSelector(selectColorMode);
    const [marker, setMarker] = useState({
        coord: {
            longitude: 121.46352943385864,
            latitude: 25.082173756840707,
        },
        name: "全球眼鏡/全球驗光所",
        address: "247新北市蘆洲區長榮路17號",
    });

    const handleFacebookPress = () => {
        Linking.openURL('https://www.facebook.com/profile.php?id=100057583504194&mibextid=LQQJ4d'); // 更改為您的 Facebook 頁面 URL
    };

    const { colors } = useTheme();

    return (
        <SafeAreaProvider>
            <GluestackUIProvider config={config}>
                <Box backgroundColor={colorMode == "light" ? "white" : "#232323"} height={'100%'}>
                <Box height={320} width={width} >
                    <MapView
                        region={region}
                        style={{ flex: 1 }}
                        showsTraffic
                    >
                        <Marker
                            coordinate={marker.coord}
                            title={marker.name}
                            description={marker.address}
                        />
                    </MapView>
                </Box>

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

                <View style={{ marginLeft: 40 }}>
                        <Text style={{
                            fontSize: 20,
                            lineHeight: 50,
                            color: colorMode === "light" ? "black" : "white"
                        }}>
                            <MaterialCommunityIcons
                                name={'phone'}
                                size={26}
                            />{'     '}
                            (02) 8282 - 6607
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            lineHeight: 50,
                            color: colorMode === "light" ? "black" : "white"
                        }}>
                        <MaterialCommunityIcons
                            name={'map-marker'}
                            size={26}
                        />{'     '}
                        247新北市蘆洲區長榮路17號
                    </Text>
                        <Text style={{
                            fontSize: 20,
                            lineHeight: 50,
                            color: colorMode === "light" ? "black" : "white"
                        }}>
                        <MaterialCommunityIcons
                            name={'clock'}
                            size={26}
                        />{'     '}
                        週一至週日 11:00 - 22:00
                    </Text>
                </View>
                <Center>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity onPress={handleFacebookPress}>
                            <MaterialCommunityIcons
                                name={'facebook'}
                                size={40}
                                    color={colorMode === "light" ? colors.primary : colors.light}
                            />
                        </TouchableOpacity>
                    </View>
                </Center>
            </Box>
            </GluestackUIProvider>
        </SafeAreaProvider>
    );
}; 
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        lineHeight: 50,
        
    }
})




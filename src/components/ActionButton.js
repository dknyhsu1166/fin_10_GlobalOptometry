import React from "react";
import { View } from "react-native";
import {
    Box,
    Center,
    Pressable,
    Text,
    Image,
    Button,
    ButtonText,
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetDragIndicator,
    ActionsheetDragIndicatorWrapper,
    ActionsheetItem,
    ActionsheetItemText,
    ActionsheetContent,
} from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"

import { selectCartItems, addCartItems, removeCartItems, clearCart } from "../redux/cartSlice";
import { useState } from "react";
//import {Badge,theme} from "antd";
import Toast from 'react-native-toast-message';
import { StyleSheet } from "react-native";


import MyTheme from '../Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default () => {
    const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);

    const handleRemoveItem = (itemId) => {
        dispatch(removeCartItems(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleSubmit = () => {
        if (cartItems.length > 0) {
            handleClose();
            openNotification();
            handleClearCart();
        } else {
            Toast.show({
                type: 'error',
                text1: '購物車是空的',

                position: 'bottom'
            });
        }
    };

    //onst{token: {colorTextBase}}=theme.useToken();
    // const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0;
    // const toggleModal = () => setIsOpen(!isOpen);

    const openNotification = () => {
        Toast.show({
            type: 'success',
            text1: '商品已送出',

            position: 'bottom'
        });
    };

    const toastConfig = {
        custom: ({ text1, text2, ...rest }) => (
            <View style={styles.toastContainer}>
                <Text style={styles.toastText1}>{text1}</Text>
                <Text style={styles.toastText2}>{text2}</Text>
            </View>
        ),
    };

    const styles = StyleSheet.create({
        toastContainer: {
            height: 200,
            width: '90%',
            backgroundColor: '#333',
            borderRadius: 8,
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
        },
        toastText1: {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff',
        },
        toastText2: {
            fontSize: 25,
            color: '#fff',
        },
    });

    return (
        <Box>
            <View>
                <Pressable
                    onPress={() => handleClose()}
                    bg={colors.primary}
                    width={80}
                    height={80}
                    borderRadius={40}
                    justifyContent="center"
                    alignItems="center"
                    style={{
                        position: 'relative',
                        bottom: 20,  // 距離底部的距離
                    }}
                >
                    <View style={{
                        position: 'absolute', top: -3, right: -10, backgroundColor: '#232323', borderRadius: 100, paddingBottom: 7, paddingTop: 7, paddingLeft: 12, paddingRight: 12

                    }}>
                        <Text style={{ color: 'white', fontSize: 14 }}>{count}</Text>
                    </View>

                    <MaterialCommunityIcons name="cart" color={'white'} size={36} />

                </Pressable>

            </View>


            <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>

                <ActionsheetBackdrop />
                <ActionsheetContent h={200} zIndex={999} backgroundColor={colorMode == "light" ? "white" : "#232323"}>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>

                    <Box style={{ height: 'auto', flexDirection: 'column' }}>
                        <Center>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10, marginBottom: 20, color: colorMode === "light" ? "black" : "white" }}>
                                購物車
                            </Text>
                            <Box>
                                {cartItems.length === 0 ? (
                                    <Text style={{ marginBottom: 30, marginTop: 20 , color: colorMode === "light" ? "black" : "white" }}> 購物車是空的 </Text>
                                ) : (
                                    cartItems.map((item) => (
                                        <Box key={item.id} style={{ height: 60, width: '80%', flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center', }}>
                                            <Box>
                                                <Image
                                                    style={{ width: 50, height: 50 }}
                                                    source={item.image}
                                                    alt='Image'
                                                />
                                            </Box>
                                            <Text style={{ color: colorMode === "light" ? "black" : "white" }}>
                                                {item.name} x {item.qty}
                                            </Text>
                                            <Pressable onPress={() => handleRemoveItem(item.id)}>
                                                <Text style={{ color: 'red', paddingRight: 15, paddingLeft: 15, paddingBottom: 10, paddingTop: 10, borderWidth: 1, borderRadius: 10, borderColor: 'gray' }}>刪除</Text>
                                            </Pressable>
                                        </Box>
                                    ))
                                )

                                }
                            </Box>

                        </Center>

                    </Box>
                    <Box style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                        {/* <Center>
                            <Button onPress={handleClose} style={{ backgroundColor:'gray',paddingRight:25, paddingLeft:25, paddingBottom:5, paddingTop:5, borderWidth:1,  borderRadius:10, borderColor:'gray'}}>
                                <ActionsheetItemText style={{fontSize:16, color: colorMode === "light" ? "black" : "white"}}>關閉</ActionsheetItemText>
                            </Button>
                        </Center>
                        <Box style={{ width: 60 }}></Box> */}
                        <Center style={{ marginBottom: 5 }}>
                            <Button onPress={() => { handleClose(); handleSubmit(); handleClearCart(); }} style={{ backgroundColor: '#4338ca', paddingRight: 25, paddingLeft: 25, paddingBottom: 5, paddingTop: 5, borderWidth: 1, borderRadius: 10, borderColor: '#4338ca' }}>
                                <ActionsheetItemText style={{ fontSize: 20, color: colorMode === "light" ? "white" : "white" }}>送出</ActionsheetItemText>
                            </Button>
                        </Center>
                    </Box>

                </ActionsheetContent>
            </Actionsheet>
            <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
        </Box>
    );
};
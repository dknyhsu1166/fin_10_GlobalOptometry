//import { notification } from "antd"
import React from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import { Center, HStack, VStack, ScrollView, Box, Heading, Image, Button, ButtonText } from "@gluestack-ui/themed";
import { Text } from "react-native";
import styles from "./style"

export default function AddToCart({ product, qty }) {
    const dispatch = useDispatch();

    //   const openNotification = () => {//跳出加入購物通知
    //     notification.open({
    //       message: 'Shopping Notification',
    //       description:
    //         `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
    //       placement: 'bottomRight'
    //     });
    //   };

    const addToCart = () => {
        //openNotification();
        dispatch(addCartItems({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            qty,

        }))
    };

    return (
        <Button type="primary" style={styles.btn} onPress={addToCart} marginTop={5} padding={2} backgroundColor='#4338ca'>
            <ButtonText fontSize={16} fontWeight='500' color='#FFFFFF' textAlign='center' lineHeight={20} margin={10}>
                加入購物車
            </ButtonText>
        </Button>

    );
}
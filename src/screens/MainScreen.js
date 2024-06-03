import React from "react";
import { ScrollView } from "react-native";
import MainList from "../components/MainList";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"
const MainScreen = ({ navigation }) => {
    const colorMode = useSelector(selectColorMode);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colorMode === "light" ? "white" : "#232323" }}>
            <MainList navigation={navigation} />
        </ScrollView>
    );
};

export default MainScreen;
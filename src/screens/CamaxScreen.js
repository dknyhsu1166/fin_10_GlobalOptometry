import React from "react";
import { ScrollView } from "react-native";
import CamaxList from "../components/CamaxList";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"
const CamaxScreen = ({ navigation }) => {
    const colorMode = useSelector(selectColorMode);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colorMode == "light" ? "white" : "#303030" }}>
            <CamaxList
                navigation={navigation}
            />
        </ScrollView>
    );
};

export default CamaxScreen;
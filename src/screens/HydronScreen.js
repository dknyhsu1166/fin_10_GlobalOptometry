import React from "react";
import { ScrollView } from "react-native";
import HydronList from "../components/HydronList";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"
const HydronScreen = ({ navigation }) => {
    const colorMode = useSelector(selectColorMode);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colorMode == "light" ? "white" : "#303030" }}>
            <HydronList
                navigation={navigation}
            />
        </ScrollView>
    );
};

export default HydronScreen;
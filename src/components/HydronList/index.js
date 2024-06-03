import React from "react";
import { Text, FlatList, View, Image } from "react-native";
import sectionsD from "../../json/HydronDaily.json";
import sectionsM from "../../json/HydronMonthly.json";
import HydronDetail from "../HydronDetail";
import styles from "./style";
import { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Box, Center } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../../redux/counterSlice"
const HydronList = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    const SegmentedContent = () => {
        if (selectedIndex == 0) {
            return (
                <View>
                    <View style={styles.section}>

                        <Text style={{
                            color: colorMode === "light" ? "black" : "white",
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginLeft: 25,
                            marginTop: 5,
                        }}>
                            {sectionsM[0].title}
                        </Text>
                        <FlatList
                            horizontal={true}
                            data={sectionsM[0].data}
                            renderItem={({ item }) => <HydronDetail lens={item} navigation={navigation} />}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                            keyExtractor={item => item.title}
                        />
                    </View>

                    <View style={styles.section}>
                        <Text style={{
                            color: colorMode === "light" ? "black" : "white",
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginLeft: 25,
                            marginTop: 5,
                        }}>
                            {sectionsM[1].title}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../images/new2.png')}
                                style={styles.image}
                            />
                            <FlatList
                                horizontal={true}
                                data={sectionsM[1].data}
                                renderItem={({ item }) => <HydronDetail lens={item} navigation={navigation} />}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                                keyExtractor={item => item.title}
                            />
                        </View>
                    </View>
                    <View style={styles.section2}>
                        <Text style={{
                            color: colorMode === "light" ? "black" : "white",
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginLeft: 25,
                            marginTop: 5,
                        }}>
                            {sectionsM[2].title}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../images/hot1.png')}
                                style={styles.image}
                            />
                            <FlatList
                                horizontal={true}
                                data={sectionsM[2].data}
                                renderItem={({ item }) => <HydronDetail lens={item} navigation={navigation} />}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                                keyExtractor={item => item.title}
                            />
                        </View>
                    </View>
                    <View style={styles.section2}>
                        <Text style={{
                            color: colorMode === "light" ? "black" : "white",
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginLeft: 25,
                            marginTop: 5,
                        }}>
                            {sectionsM[3].title}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../images/hot2.png')}
                                style={styles.image}
                            />
                            <FlatList
                                horizontal={true}
                                data={sectionsM[3].data}
                                renderItem={({ item }) => <HydronDetail lens={item} navigation={navigation} />}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                                keyExtractor={item => item.title}
                            />
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <View style={styles.section}>

                        <Text style={{
                            color: colorMode === "light" ? "black" : "white",
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginLeft: 25,
                            marginTop: 5,
                        }}>
                            {sectionsD[0].title}
                        </Text>
                        <FlatList
                            horizontal={true}
                            data={sectionsD[0].data}
                            renderItem={({ item }) => <HydronDetail lens={item} navigation={navigation} />}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                            keyExtractor={item => item.title}
                        />
                    </View>

                    <View style={styles.section}>
                        <Text style={{
                            color: colorMode === "light" ? "black" : "white",
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginLeft: 25,
                            marginTop: 5,
                        }}>
                            {sectionsD[1].title}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../images/new3.png')}
                                style={styles.image2}
                            />
                            <FlatList
                                horizontal={true}
                                data={sectionsD[1].data}
                                renderItem={({ item }) => <HydronDetail lens={item} navigation={navigation} />}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                                keyExtractor={item => item.title}
                            />
                        </View>
                    </View>
                    <View style={styles.section2}>
                        <Text style={{
                            color: colorMode === "light" ? "black" : "white",
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginLeft: 25,
                            marginTop: 5,
                        }}>
                            {sectionsD[2].title}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../images/len6.png')}
                                style={styles.image2}
                            />
                            <FlatList
                                horizontal={true}
                                data={sectionsD[2].data}
                                renderItem={({ item }) => <HydronDetail lens={item} navigation={navigation} />}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                                keyExtractor={item => item.title}
                            />
                        </View>
                    </View>
                    <View style={styles.section2}>
                        <Text style={{
                            color: colorMode === "light" ? "black" : "white",
                            fontWeight: 'bold',
                            fontSize: 24,
                            marginLeft: 25,
                            marginTop: 5,
                        }}>
                            {sectionsD[3].title}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../../images/len7.png')}
                                style={styles.image2}
                            />
                            <FlatList
                                horizontal={true}
                                data={sectionsD[3].data}
                                renderItem={({ item }) => <HydronDetail lens={item} navigation={navigation} />}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                                keyExtractor={item => item.title}
                            />
                        </View>
                    </View>
                </View>
            )
        }
    }
    return (
        <Box flex={1} mt={10}>
            <SegmentedControlTab
                values={["月拋", "日拋"]}
                tabStyle={{
                    backgroundColor: colorMode === "light" ? 'white' : 'gray',
                    marginTop: 10,
                    marginBottom: 20,
                    borderColor: colorMode === "light" ? colors.dark : 'gray',
                }}
                activeTabStyle={{
                    backgroundColor: colorMode === "light" ? colors.primary : colors.light,
                    marginTop: 10,
                    marginBottom: 20,
                    borderColor: colorMode === "light" ? colors.dark : 'gray',
                }}
                firstTabStyle={{ marginLeft: 20 }}
                lastTabStyle={{ marginRight: 20 }}
                tabTextStyle={{ fontSize: 16, padding: 5, color: colorMode == "light" ? "#232323" : "white" }}
                activeTabTextStyle={{ color: colorMode == "light" ? "white" : "#232323" }}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIndex(index)}
            />
            <SegmentedContent />
        </Box>
    );
};

export default HydronList;
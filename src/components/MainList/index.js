import React from "react";
import { Text, FlatList, View, Image,StyleSheet } from "react-native";
import { Center } from "@gluestack-ui/themed";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import MainDetail from "../MainDetail"
import section from "../../json/main.json";
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../../redux/counterSlice"


const MainList = ({ navigation }) => {
    const colorMode = useSelector(selectColorMode);
    return (
        <View style={{ backgroundColor: colorMode == "light" ? "white" : "#232323" }}>
            <SwiperFlatList autoplay autoplayDelay={3} autoplayLoop index={0} showPagination={true}
                paginationStyle={{ position: 'relative', bottom: 35, marginBottom: -5}}>
                <View >
                    <Image
                        source={require('../../images/title1.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View >
                    <Image
                        source={require('../../images/title2.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View>
                    <Image
                        source={require('../../images/title3.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View>
                    <Image
                        source={require('../../images/title4.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
            </SwiperFlatList>

            <Text style={{
                color: colorMode === "light" ? "black" : "white",
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
                marginTop: 5,
            }}>
                {section[0].title}
            </Text>
            <View style={styles.section}>
                <FlatList
                    horizontal={true}
                    data={section[0].data}
                    renderItem={({ item }) => <MainDetail lens={item} navigation={navigation} />}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                    keyExtractor={item => item.title}
                />
            </View>
            <Text style={{
                color: colorMode === "light" ? "black" : "white",
                fontWeight: 'bold',
                fontSize: 24,
                textAlign: 'center',
                marginTop: 5,
            }}>
                    {section[1].title}
            </Text>
            <View style={styles.section}>
                <FlatList
                    horizontal={true}
                    data={section[1].data}
                    renderItem={({ item }) => <MainDetail lens={item} navigation={navigation} />}
                    howsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
                    keyExtractor={item => item.title}
                />
            </View>

            <View style={styles.bottom}>
                <Center>
                <View style={styles.bottomcontainer}>
                        <Text style={styles.bottomheader}>
                            注意事項
                        </Text>
                    </View>
                </Center>
                <Text style={styles.bottomtext}>
                    1. 使用前請詳閱使用說明書並遵照指示使用。
                </Text>
                <Text style={styles.bottomtext}>
                    2. 詳細的配戴隱形眼鏡操作方式暨注意事項，請參閱商品使用注意事項。
                </Text>
                <Text style={styles.bottomtext}>
                    3. 配戴一般隱形眼鏡須經眼科醫師或合格驗光人員驗光配鏡，並定期接受眼科醫師追蹤檢查。
                </Text>
                <Text style={styles.bottomtext}>
                    4. 本器材不得逾建議之最長配戴時數、不得重覆配戴，於就寢前務必取下，以免感染或潰瘍。
                </Text>
                <Text style={styles.bottombottom}>
                    5. 如有不適，應立即就醫。
                </Text>
            </View>
        </View>
    );
};

export default MainList;
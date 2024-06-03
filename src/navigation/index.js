import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Platform, TouchableOpacity } from "react-native";
import { Box,Image, Text, Pressable,} from '@gluestack-ui/themed';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"
import { selectHasLogin, selectHasAccount } from "../redux/accountSlice";

import MainScreen from '../screens/MainScreen';
import CamaxDetailScreen from '../screens/CamaxDetailScreen';
import HydronDetailScreen from '../screens/HydronDetailScreen';
import InfoScreen from '../screens/InfoScreen';
import MemberScreen from '../screens/MemberScreen.js';
import MerchandiseScreen from '../screens/MechandiseScreen.js';
import AccountScreen from '../screens/AccountScreen';
import SettingtScreen from '../screens/SettingScreen';
import NullScreen from '../screens/NullScreen';
import ActionButton from '../components/ActionButton';
import SearchScreen from '../screens/SearchScreen.js'
import MyTheme from '../Theme';
import HydronScreen from '../screens/HydronScreen.js'
import CamaxScreen from '../screens/CamaxScreen.js'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  const hasLogin = useSelector(selectHasLogin);
  const hasAccount = useSelector(selectHasAccount);
  return (
    
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flex={1}
      >
        {!hasLogin ? (
          !hasAccount ? (
            <LoginScreen />
          ) : (
            <RegisterScreen />
          )
        ) : (
      <NavigationContainer theme={MyTheme}>
        <MyDrawer />
            </NavigationContainer>
        )}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const CustomDrawerContent = (props) => {
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{
        flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 45, marginBottom: 20
      }}>
        <Image
          height={60}
          width={60}
          source={require("../images/profile.png")}
          alt='AccountImage'
        />
        <Text style={{ fontWeight: '500', fontSize: 20, marginLeft: 16, color: colorMode === "light" ? "black" : "white" }}>
          許宸瑋
        </Text>
      </View>
      <View style={{ backgroundColor: colorMode === "light" ? 'lightgray' : "gray", height: 2 ,marginBottom:10}} />
      <DrawerItemList {...props} />
      </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerStyle: { width: 250, backgroundColor: colorMode === "light" ? "white" : "#232323", },
        drawerActiveBackgroundColor: colors.light,
        drawerInactiveTintColor: colorMode === "light" ? colors.gray : 'lightgray',
        drawerActiveTintColor: colors.primary,
        headerTitleStyle: {
          ontWeight: '400',
          fontSize: 20,
        },
        drawerLabelStyle: { fontSize: 14, fontWeight: '400', backgroundColor: colorMode === "light" ? "white" : "#232323", },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
          title: "主頁",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={32} marginTop={5} paddingBottom={2} />
          ),
          drawerLabelStyle: {
            fontSize: 16, // 更改字體大小
          },
        }}
      />
      <Drawer.Screen
        name="MemberStack"
        component={MemberScreen}
        options={{
          headerStyle: {
            backgroundColor: colorMode === "light" ? "white" : "#232323",
          },
          headerTitleStyle: {
            color: colorMode === "light" ? "black" : "white"
          },
          title: "會員中心",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="card-account-details" color={color} size={30} marginTop={4} paddingBottom={3} />
          ),

          drawerLabelStyle: {
            fontSize: 16, // 更改字體大小
            paddingBottom: 3,
          },
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={AccountScreen}
        options={{
          //headerShown: false,
          title: "用戶資料",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={32} marginTop={4} />
          ),
          headerStyle: {
            backgroundColor: colorMode === "light" ? "white" : "#232323",
          },
          headerTitleStyle: {
            color: colorMode === "light" ? "black" : "white"
          },
          drawerLabelStyle: {
            
            fontSize: 16, // 更改字體大小
          },
        }}
      />
      <Drawer.Screen
        name="InfoStack"
        component={InfoScreen}
        options={{
          headerStyle: {
            backgroundColor: colorMode === "light" ? "white" : "#232323",
          },
          headerTitleStyle: {
            color: colorMode === "light" ? "black" : "white"
          },
          title: "店家資訊",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={32} marginTop={4} paddingBottom={3} />
          ),

          drawerLabelStyle: {
            fontSize: 16, // 更改字體大小
            paddingBottom: 3,
          },
        }}
      />

      <Drawer.Screen
        name="SettingsStack"
        component={SettingtScreen}
        options={{
          headerStyle: {
            backgroundColor: colorMode === "light" ? "white" : "#232323",
          },
          headerTitleStyle: {
            color: colorMode === "light" ? "black" : "white"
          },
          //headerShown: false,
          title: "設定",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={32} marginTop={4} paddingBottom={3} />
          ),
          drawerLabelStyle: {
            
            fontSize: 16, // 更改字體大小
            paddingBottom:3,
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = () => {
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: colorMode === "light" ? colors.primary : 'white',
        tabBarStyle: { height: Platform.OS === 'ios' ? 90 : 70, backgroundColor: colorMode === "light" ? "white" : "#232323" }
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "主頁",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={32} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 7,
          },
        }}
      />
      
      <Tab.Screen
        name="ActionButton"
        component={NullScreen}
        options={{
          tabBarButton: () => <ActionButton />,
        }}
      />
      
      <Tab.Screen
        name="Merchandise"
        component={Merchandise}
        options={{
          headerShown: false,
          title: "商品",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={28} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 7,
          },
        }}
      />
    </Tab.Navigator>
  );
}


const HomeStack = ({ navigation }) => {
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorMode === "light" ? "white" : "#232323",
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
          headerTitle: () => (
            <>
              {colorMode === "light" ? (
                <Image
                  source={require('../images/logo_black.png')}
                  style={{
                    width: Platform.OS === 'ios' ? 0 : 140,
                    height: Platform.OS === 'ios' ? 0 : 50,
                    marginBottom: 10,
                    marginTop: 8,
                    marginLeft: Platform.OS === 'ios' ? 0 : 70,
                  }}
                  alt="logo pic"
                />
              ) : (
                <Image
                  source={require('../images/logo_white.png')}
                  style={{
                    width: Platform.OS === 'ios' ? 0 : 140,
                    height: Platform.OS === 'ios' ? 0 : 50,
                    marginBottom: 10,
                    marginTop: 8,
                    marginLeft: Platform.OS === 'ios' ? 0 : 70,
                  }}
                  alt="logo pic"
                />
              )}
            </>
          ),

          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={28}
              color={colorMode === "light" ? "black" : "white"}
              onPress={() => navigation.navigate('Search')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="HydronMain"
        component={HydronScreen}
        options={{
          title: "海昌",
          headerTitleStyle: {
            color: colorMode === "light" ? "black" : "white"
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.goBack(null)}
              style={{ marginLeft: 0 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CamaxMain"
        component={CamaxScreen}
        options={{
          title: "加美",
          headerTitleStyle: {
            color: colorMode === "light" ? "black" : "white"
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.goBack(null)}
              style={{ marginLeft: 0 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CamaxDetail"
        component={CamaxDetailScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.navigate('CamaxMain')}
              style={{ marginLeft: 0 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="HydronDetail"
        component={HydronDetailScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.navigate('HydronMain')}
              style={{ marginLeft: 0 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.goBack(null)}
              style={{ marginLeft: 0 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
    </Stack.Navigator>
    
  );
}

const Merchandise = ({ navigation }) => {
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorMode === "light" ? "white" : "#232323",
        }
      }}>
      <Stack.Screen
        name="goods"
        component={MerchandiseScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={24}
              onPress={() => navigation.openDrawer()}
              style={{ marginRight: 20 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
          headerTitle: () => (
            <>
              {colorMode === "light" ? (
                <Image
                  source={require('../images/logo_black.png')}
                  style={{
                    width: Platform.OS === 'ios' ? 0 : 140,
                    height: Platform.OS === 'ios' ? 0 : 50,
                    marginBottom: 10,
                    marginTop: 8,
                    marginLeft: Platform.OS === 'ios' ? 0 : 70,
                  }}
                  alt="logo pic"
                />
              ) : (
                <Image
                  source={require('../images/logo_white.png')}
                  style={{
                    width: Platform.OS === 'ios' ? 0 : 140,
                    height: Platform.OS === 'ios' ? 0 : 50,
                    marginBottom: 10,
                    marginTop: 8,
                    marginLeft: Platform.OS === 'ios' ? 0 : 70,
                  }}
                  alt="logo pic"
                />
              )}
            </>
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={'magnify'}
              size={28}
              onPress={() => navigation.navigate('Search2')}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Hydron"
        component={HydronScreen}
        options={{
          title: "海昌",
          headerTitleStyle: {
            color: colorMode === "light" ? "black" : "white"
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.navigate('goods')}
              style={{ marginLeft: 0 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Camax"
        component={CamaxScreen}
        options={{
          title: "加美",
          headerTitleStyle: {
            color: colorMode === "light" ? "black" : "white"
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.navigate('goods')}
              style={{ marginLeft: 0 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CamaxDetail"
        component={CamaxDetailScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.navigate('Camax')}
              style={{ marginLeft: 0 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="HydronDetail"
        component={HydronDetailScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.navigate('Hydron')}
              style={{ marginLeft: 0 }}
              color={colorMode === "light" ? "black" : "white"}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Search2"
        component={SearchScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'chevron-left'}
              size={30}
              onPress={() => navigation.navigate('goods')}
              color={colorMode === "light" ? "black" : "white"}
              style={{ marginLeft: 0 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
    
  );
}

export default Navigation;
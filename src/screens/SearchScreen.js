import React from 'react';
import { Searchbar } from 'react-native-paper';
import { View,StyleSheet,Text } from 'react-native'
import { useTheme } from '@react-navigation/native';
import MyTheme from '../Theme';
import { useDispatch, useSelector } from "react-redux";
import { selectCounter, selectColorMode } from "../redux/counterSlice"
const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);
  return (
    <View style={{ backgroundColor: colorMode === "light" ? "white" : "#232323", height: '100%' }}>
    <View style={{ marginTop: 10, marginLeft: 10, marginRight: 10, backgroundColor: colorMode === "light" ? "white" : "#232323" }}>
      <Searchbar
        placeholder="搜尋"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{ backgroundColor: colors.light }}
        iconColor={colors.primary}
      />
    </View>
</View >
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default SearchScreen;
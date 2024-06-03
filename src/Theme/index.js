import { DefaultTheme } from '@react-navigation/native';


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        lightgray: '#EDEDEF',
        gray: '#666666',
        primary: '#4338ca',
        light: '#e0e7ff',
        dark:'#232323',
    },
};

export default MyTheme;
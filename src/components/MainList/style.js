import {  Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    section: {
        marginLeft: 0,
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center', 
        marginTop: 5,
    },
    image: {
        height: 270,
        width: width,
    },
    bottom: {
        marginTop: 12,
        backgroundColor: '#e0e7ff'
    },
    bottomcontainer: {
        width: 180,
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom:14
    },
    bottomheader: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
        textAlign: 'center', 
        fontWeight: 'bold',
        borderBottomColor: '#4338ca',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center', 
    },
    bottomtext: {
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        lineHeight: 24,
        marginBottom: 6,
    },
    bottombottom: {
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
        lineHeight: 24,
        marginBottom: 24,
    }
})

export default styles;
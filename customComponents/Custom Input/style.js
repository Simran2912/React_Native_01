import { StyleSheet } from 'react-native';

const commonStyles = () => {
    return StyleSheet.create({
        container: {
            height: 70,
            borderRadius: 8,
            marginTop: 20,
            paddingBottom: 15,
            backgroundColor:'#d5d6f5'
        },
        titleContainer: {
            paddingHorizontal: 16,
            paddingTop: 10,
            flexDirection:'row',
        },
        title: {
            fontSize: 16,
            fontWeight: '700',
            color:'#000'
        },
        containerStyle: {
            paddingHorizontal: 0,
            height: 40,
            borderRadius: 8,
        },
        inputContainer: {
            borderBottomWidth: 0,
            bottom: 3,
            marginBottom: 0,
        },
        inputStyle: {
            paddingTop: 5,
            height: 20,
            paddingHorizontal: 15,
            fontSize: 17,
        },
        asterisk:{
            color:'#C7253E',
            marginLeft:5,
            top:0
        }
    });
};
export default commonStyles;

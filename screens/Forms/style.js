import { StyleSheet } from 'react-native';

const commonStyles = ()=>{
    return StyleSheet.create({
        container: {
            flex:1,
            padding: 20,
            backgroundColor:'#ECF2FF',
        },
        titleContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginVertical: 10,
        },
        title:{
            fontSize:30,
            fontWeight:'700',
        },
        bottomButton:{
            bottom:0,
            paddingHorizontal:20,
            paddingBottom:20,
            backgroundColor:'#ECF2FF',
        },
        icon:{
            right:10,
            paddingBottom:10,
            marginBottom: 0,
        },
        buttonStyle:{
            backgroundColor:'#D67BFF',
            borderRadius:12,
            padding:10,
            alignItems:'center',
        },
        buttonText:{
            fontSize:18,
            color:'#fff',
            fontWeight:'700',
        },
    });
};
export default commonStyles;

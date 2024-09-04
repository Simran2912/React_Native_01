import { StyleSheet } from 'react-native';

const commonStyles = ()=>{
    return StyleSheet.create({
        container: {
            flex:1,
            padding: 20,
            backgroundColor:'#ECF2FF',
        },
        listContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
        },
        list:{
            backgroundColor:'#D09CFA',
            width:'45%',
            paddingHorizontal:10,
            paddingVertical:20,
            borderRadius:8,
            justifyContent:'center',
            alignItems:'center',
        },
        iconContainer:{
            width:70,
            height:70,
            borderRadius:100,
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center',
            marginBottom:10,
        },
        title:{
            fontSize:22,
            fontWeight:'700',
        },
        cardContainer:{
            flexDirection:'row',
            backgroundColor:'#D09CFA',
            marginBottom:10,
            padding:10,
            borderRadius:8,
            justifyContent:'space-between',
        },
        cardIconContainer:{
            width:60,
            height:60,
            borderRadius:100,
            backgroundColor:'#fff',
            justifyContent:'center',
            alignItems:'center',
        },
        cardDataContainer:{
            width:'80%',
            alignItems:'flex-start',
        },
        cardData:{
            fontSize:16,
            fontWeight:'700',
            color:'#ooo',
        },
        renderEmptyList:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        }
    });
};
export default commonStyles;

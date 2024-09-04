import { StyleSheet } from 'react-native';

const commonStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
             backgroundColor:'#ECF2FF',
        },
        titleContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
        },
        title: {
            fontSize: 30,
            fontWeight: '700',
        },
        todoInputContainer: {
            width: '100%',
        },
        todoInput: {
            width: '80%',
        },
        todoContainer: {
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'space-between',
        },
        iconContainer: {
            borderRadius: 100,
            height: 60,
            width: 60,
            top:6,
            margin: 0,
            bottom: 0,
            backgroundColor: '#3A1078',
            alignItems: 'center',
            justifyContent: 'center',
        },
        iconEditContainer:{
            borderRadius: 100,
            height: 40,
            width: 40,
            backgroundColor:'#0D7C66',
            alignItems: 'center',
            justifyContent: 'center',
        },
        iconDeleteContainer:{
            borderRadius: 100,
            height: 40,
            width: 40,
            backgroundColor:'#A02334',
            alignItems: 'center',
            justifyContent: 'center',
            // left:10
        },
        itemContainer:{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:15,
            backgroundColor:'#D67BFF',
            padding:10,
            borderRadius:10,
        },
        listItemContainer:{
            width:'70%',
        },
        listItem:{
            fontSize:16,
            fontWeight:'700',
            color:'#ooo',
        },
        buttonContainer:{
            width:'30%',
            flexDirection:'row',
            justifyContent:'space-evenly',
        },
    });
};
export default commonStyles;

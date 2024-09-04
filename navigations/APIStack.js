import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import APILists from '../screens/API/APILists';
import ListDetails from '../screens/API/ListDetails';

const API_Stack = createNativeStackNavigator();
const APIStack = () => {
    return (
        <API_Stack.Navigator initialRouteName="APILists"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#C490E4',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <API_Stack.Screen
                name="APILists"
                component={APILists}
                options={{
                    headerTitle: 'Lists',
                }} />
            <API_Stack.Screen
                name="APIListsDetails"
                component={ListDetails}
                options={{
                    headerTitle: 'Lists Details',
                }} />
        </API_Stack.Navigator>
    );
};
export default APIStack;

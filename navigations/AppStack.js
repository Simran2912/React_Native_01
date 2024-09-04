import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBottomTabNavigator from './AppBottomTab';

const App_Stack = createNativeStackNavigator();
const AppStack = () => {
    return (
        <App_Stack.Navigator initialRouteName="AppTabNavigator"
        screenOptions={{
            headerShown:false,
        }}>
            <App_Stack.Screen
                name="AppTabNavigator"
                component={AppBottomTabNavigator} />
        </App_Stack.Navigator>
    );
};
export default AppStack;

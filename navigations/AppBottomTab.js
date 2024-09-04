/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FormScreen from '../screens/Forms/FormScreen';
import TodoScreen from '../screens/Todos/TodoScreen';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import APIStack from './APIStack';

const Tab = createBottomTabNavigator();

const AppBottomTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="FormScreen"
        screenOptions={{
            tabBarStyle: {
                height: 60,
                paddingBottom: 5,
                paddingTop: 5,
                backgroundColor:'#C490E4',
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#937DC2',
            headerStyle: {
                backgroundColor: '#C490E4',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }}>
            <Tab.Screen
                name="FormScreen"
                component={FormScreen}
                options={{
                    tabBarLabel: 'Form',
                    tabBarIcon: () => (
                        <Icon name={'form-select'} size={27} />
                    ),
                    headerTitle:'Form',
                }}
            />
            <Tab.Screen
                name="TodoScreen"
                component={TodoScreen}
                options={{
                    tabBarLabel: 'TODO',
                    tabBarIcon: () => (
                        <Icon name={'clipboard-list'} size={27} />
                    ),
                    headerTitle:'TODO',
                }} />
            <Tab.Screen name="APIStack"
                component={APIStack}
                options={{
                    tabBarLabel: 'Lists',
                    tabBarIcon: () => (
                        <Icon name={'format-list-bulleted-square'} size={27} />
                    ),
                    headerTitle:'Lists',
                    headerShown:false,
                }}/>
        </Tab.Navigator>
    );
};
export default AppBottomTabNavigator;

import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';
import LibraryScreen from './LibraryScreen'

const Tab = createMaterialBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            barStyle={{
                backgroundColor: 'black',
                borderTopWidth: 2,
                borderColor: 'white',
            }}>
            <Tab.Screen
                name="Home"
                component={LoginScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => <Icon name='home' color={focused ? '#080C0F' : 'white'} size={32} />
                }} />
            <Tab.Screen
                name="Favorite"
                component={SignUpScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => <Icon name='favorite' color={focused ? '#080C0F' : 'white'} size={32} />
                }} />
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => <Icon name='library-music' color={focused ? '#080C0F' : 'white'} size={32} />
                }} />
            <Tab.Screen
                name="Profile"
                component={SignUpScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => <Icon name='person' color={focused ? '#080C0F' : 'white'} size={32} />
                }} />
        </Tab.Navigator>
    );
}

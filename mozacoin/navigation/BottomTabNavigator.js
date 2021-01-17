import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import HomeScreen from '../screens/Home';

const BottomTabNavigator = createBottomTabNavigator();

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

export default () => {

    return (
        <BottomTabNavigator.Navigator>
            <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
            <BottomTabNavigator.Screen name="Settings" component={SettingsScreen} />
        </BottomTabNavigator.Navigator>
    )

}
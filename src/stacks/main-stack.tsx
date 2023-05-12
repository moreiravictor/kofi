import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from "../screens/preload";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
    </Stack.Navigator>
);
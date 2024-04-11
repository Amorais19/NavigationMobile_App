import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuStack } from './stack.navigation';

export default function Navigation() {
    return (
        <NavigationContainer>
            <MenuStack />
        </NavigationContainer>
    );
}
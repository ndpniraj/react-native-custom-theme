import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './app/navigation/TabNavigator';
import ThemeProvider from './app/contexts/ThemeProvider';
import Home from './app/components/Home';
import ThemeWrapper from './app/components/ThemeWrapper';
import CustomStatusBar from './app/components/CustomStatusBar';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <CustomStatusBar />
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

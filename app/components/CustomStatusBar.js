import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

const CustomStatusBar = () => {
  const { theme } = useTheme();
  const statusBarStyle =
    theme.themeMode === 'default' ? 'dark-content' : 'light-content';

  return (
    <StatusBar
      backgroundColor={theme.backgroundColor}
      barStyle={statusBarStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CustomStatusBar;

import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

const Home = () => {
  const { theme, updateTheme } = useTheme();

  const changeTheme = () => updateTheme(theme.themeMode);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.text, { color: theme.textColor }]}>
        Custom bottom tab navigation!
      </Text>
      <Button
        title='change theme'
        onPress={changeTheme}
        color={theme.nav.backgroundColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;

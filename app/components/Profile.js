import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

const Profile = ({ navigation }) => {
  const { theme } = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={[styles.text, { color: theme.textColor }]}>Profile</Text>
      <Button
        onPress={() => navigation.navigate('Test')}
        title='Move to another screen!'
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

export default Profile;

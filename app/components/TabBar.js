import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Home');
  const { theme } = useTheme();
  const { routes } = state;
  const renderColor = currentTab =>
    currentTab === selected ? theme.nav.active : theme.nav.inActive;

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.container,
          { backgroundColor: theme.nav.backgroundColor },
        ]}
      >
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.icon}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    borderRadius: 100,
    elevation: 2,
  },
});

export default TabBar;

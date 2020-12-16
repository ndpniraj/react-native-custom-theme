import React from 'react';
import { useTheme } from '../contexts/ThemeProvider';

const ThemeWrapper = ({ children }) => {
  const { isLoadingTheme } = useTheme();
  if (isLoadingTheme) return null;
  return children;
};

export default ThemeWrapper;

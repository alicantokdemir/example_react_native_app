import React from 'react';

import { Text, TouchableOpacity } from "react-native";
import { ThemeOptions } from "../themes";

import THEMES from '../themes';

const AppButton: React.FC<{
  onPress?: () => void,
  title: string,
  theme?: ThemeOptions
}> = ({ onPress, title, theme = 'light' }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={THEMES[theme].button?.container}
  >
    <Text style={THEMES[theme].button?.text}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;
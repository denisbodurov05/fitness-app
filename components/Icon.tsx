import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    FontAwesome6,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial,
} from '@expo/vector-icons';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

// Define the icon library types
export type IconLibrary =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome6'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

// Icon name types for each library
export type IconName<T extends IconLibrary> = T extends 'AntDesign'
  ? keyof typeof AntDesign.glyphMap
  : T extends 'Entypo'
  ? keyof typeof Entypo.glyphMap
  : T extends 'EvilIcons'
  ? keyof typeof EvilIcons.glyphMap
  : T extends 'Feather'
  ? keyof typeof Feather.glyphMap
  : T extends 'FontAwesome'
  ? keyof typeof FontAwesome.glyphMap
  : T extends 'FontAwesome5'
  ? keyof typeof FontAwesome5.glyphMap
  : T extends 'FontAwesome6'
  ? keyof typeof FontAwesome6.glyphMap
  : T extends 'Fontisto'
  ? keyof typeof Fontisto.glyphMap
  : T extends 'Foundation'
  ? keyof typeof Foundation.glyphMap
  : T extends 'Ionicons'
  ? keyof typeof Ionicons.glyphMap
  : T extends 'MaterialCommunityIcons'
  ? keyof typeof MaterialCommunityIcons.glyphMap
  : T extends 'MaterialIcons'
  ? keyof typeof MaterialIcons.glyphMap
  : T extends 'Octicons'
  ? keyof typeof Octicons.glyphMap
  : T extends 'SimpleLineIcons'
  ? keyof typeof SimpleLineIcons.glyphMap
  : T extends 'Zocial'
  ? keyof typeof Zocial.glyphMap
  : string;

// Props for the Icon component
export interface IconProps<T extends IconLibrary = IconLibrary> {
  library: T;
  name: IconName<T>;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

// Map of icon libraries to their components
const IconComponents = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} as const;

/**
 * A flexible Icon component that supports multiple icon libraries
 * 
 * @example
 * <Icon library="FontAwesome" name="heart" size={24} color="red" />
 * <Icon library="MaterialIcons" name="home" size={32} color="#000" />
 * <Icon library="Ionicons" name="ios-arrow-back" size={28} />
 */
export default function Icon<T extends IconLibrary>({
  library,
  name,
  size = 24,
  color,
  style,
  containerStyle,
}: IconProps<T>) {
  const IconComponent = IconComponents[library];

  if (!IconComponent) {
    console.warn(`Icon library "${library}" not found`);
    return null;
  }

  return (
    <IconComponent
      name={name as any}
      size={size}
      color={color}
      style={[style]}
    />
  );
}

// Convenience components for commonly used libraries
export const FAIcon = (props: Omit<IconProps<'FontAwesome'>, 'library'>) => (
  <Icon library="FontAwesome" {...props} />
);

export const FA5Icon = (props: Omit<IconProps<'FontAwesome5'>, 'library'>) => (
  <Icon library="FontAwesome5" {...props} />
);

export const FA6Icon = (props: Omit<IconProps<'FontAwesome6'>, 'library'>) => (
  <Icon library="FontAwesome6" {...props} />
);

export const IoIcon = (props: Omit<IconProps<'Ionicons'>, 'library'>) => (
  <Icon library="Ionicons" {...props} />
);

export const MCIcon = (props: Omit<IconProps<'MaterialCommunityIcons'>, 'library'>) => (
  <Icon library="MaterialCommunityIcons" {...props} />
);

export const MIcon = (props: Omit<IconProps<'MaterialIcons'>, 'library'>) => (
  <Icon library="MaterialIcons" {...props} />
);

export const FeatherIcon = (props: Omit<IconProps<'Feather'>, 'library'>) => (
  <Icon library="Feather" {...props} />
);

export const AntIcon = (props: Omit<IconProps<'AntDesign'>, 'library'>) => (
  <Icon library="AntDesign" {...props} />
);

// Export all icon libraries for direct use if needed
export {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    FontAwesome6,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
    Octicons,
    SimpleLineIcons,
    Zocial
};

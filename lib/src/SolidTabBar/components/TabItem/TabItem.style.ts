import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  textStyle: ViewStyle;
}

export const _container = (
  isActive: boolean,
  activeColor: string,
  inActiveColor: string,
  width: number,
  padding: number,
): ViewStyle => ({
  width,
  padding,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: isActive ? 16 : 0,
  backgroundColor: isActive ? activeColor : inActiveColor,
});

export const _textStyle = (
  isActive: boolean,
  activeTextColor: string,
  inactiveTextColor: string,
) => ({
  color: isActive ? activeTextColor : inactiveTextColor,
});

export const _shadowStyle = (shadowColor: string) => ({
  shadowColor,
  shadowRadius: 8,
  shadowOpacity: 0.3,
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export default StyleSheet.create<Style>({
  textStyle: {
    fontSize: 12,
    fontWeight: "600",
  },
});

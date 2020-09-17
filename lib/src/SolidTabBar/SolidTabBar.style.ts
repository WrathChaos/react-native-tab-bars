import { ViewStyle, Dimensions, StyleSheet } from "react-native";

const { width: ScreenWidth } = Dimensions.get("window");

interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    width: ScreenWidth * 0.9,
    justifyContent: "space-evenly",
  },
});

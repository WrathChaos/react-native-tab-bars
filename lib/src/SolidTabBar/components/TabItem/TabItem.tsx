import * as React from "react";
import { Text, View } from "react-native";
import Androw from "react-native-androw";
import styles, { _shadowStyle, _container, _textStyle } from "./TabItem.style";

export interface ITabItemProps {
  text: string;
  isActive: boolean;
  tabWidth?: number;
  textStyle?: any;
  tabPadding?: number;
  shadowStyle?: any;
  shadowColor?: string;
  activeColor?: string;
  inActiveColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
}

const TabItem = (props: ITabItemProps) => {
  const {
    text,
    isActive,
    tabWidth,
    textStyle,
    tabPadding,
    shadowStyle,
    shadowColor,
    activeColor,
    inActiveColor,
    activeTextColor,
    inactiveTextColor,
  } = props;
  return (
    <Androw
      style={
        isActive && (shadowStyle || _shadowStyle(shadowColor || "#757575"))
      }
    >
      <View
        style={_container(
          isActive,
          activeColor || "#fbd000",
          inActiveColor || "transparent",
          tabWidth || 60,
          tabPadding || 5,
        )}
      >
        <Text
          style={[
            textStyle || styles.textStyle,
            _textStyle(
              isActive,
              activeTextColor || "#fff",
              inactiveTextColor || "#757575",
            ),
          ]}
        >
          {text}
        </Text>
      </View>
    </Androw>
  );
};

TabItem.defaultProps = {
  text: "All",
  tabWidth: 60,
  tabPadding: 5,
  shadowColor: "#757575",
  activeColor: "#fbd000",
  activeTextColor: "#fff",
  inactiveTextColor: "#757575",
  inactiveColor: "transparent",
};

export default TabItem;

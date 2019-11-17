import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";
import { _shadowStyle, _container, _textStyle } from "./TabItem.style";

const TabItem = props => {
  const {
    text,
    isActive,
    tabWidth,
    tabPadding,
    shadowStyle,
    shadowColor,
    activeColor,
    inActiveColor,
    activeTextColor,
    inactiveTextColor
  } = props;
  return (
    <Androw style={isActive && (shadowStyle || _shadowStyle(shadowColor))}>
      <View
        style={_container(
          isActive,
          activeColor,
          inActiveColor,
          tabWidth,
          tabPadding
        )}
      >
        <Text
          style={_textStyle(isActive, activeTextColor, inactiveTextColor)}
          {...props}
        >
          {text}
        </Text>
      </View>
    </Androw>
  );
};

TabItem.propTypes = {
  text: PropTypes.string,
  tabPadding: PropTypes.number,
  shadowColor: PropTypes.string,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  inactiveTextColor: PropTypes.string,
  tabWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TabItem.defaultProps = {
  text: "All",
  tabWidth: 60,
  tabPadding: 5,
  shadowColor: "#757575",
  activeColor: "#fbd000",
  activeTextColor: "#fff",
  inactiveTextColor: "#757575",
  inactiveColor: "transparent"
};

export default TabItem;

import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Androw from "react-native-androw";

const TabItem = props => {
  const {
    isActive,
    text,
    activeColor,
    inActiveColor,
    activeTextColor,
    inactiveTextColor,
    onPress
  } = props;
  return (
    <Androw
      style={
        isActive && {
          shadowRadius: 8,
          shadowOpacity: 0.3,
          shadowColor: "#757575",
          shadowOffset: {
            width: 0,
            height: 3
          }
        }
      }
    >
      <TouchableOpacity
        style={{
          width: 60,
          padding: 5,
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isActive ? "#fbd000" : "transparent"
        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "600",
            color: isActive ? "#fff" : "#000"
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </Androw>
  );
};

TabItem.propTypes = {
  text: PropTypes.string
};

TabItem.defaultProps = {
  text: "All"
};

export default TabItem;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Animated, View, Dimensions } from "react-native";
import TabItem from "./components/TabItem/TabItem";

const { width, height } = Dimensions.get("window");

const SolidTabBar = props => {
  const { tabs, initial, onPress, onChange } = props;
  const [selectedOne, setSelectedOne] = useState(initial);

  handleOnPress = item => {
    setSelectedOne(item.id);
    onPress && onPress(item);
    onChange && onChange(item);
  };

  renderTabs = () => {
    return tabs.map((item, index) => {
      const isActive = item.id === selectedOne;
      return (
        <TabItem
          key={item.id}
          text={item.text}
          isActive={isActive}
          onPress={() => handleOnPress(item)}
        />
      );
    });
  };

  return (
    <View
      style={{
        width: width * 0.9,
        margin: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
      }}
    >
      {renderTabs()}
    </View>
  );
};

SolidTabBar.propTypes = {
  example: PropTypes.number
};

SolidTabBar.defaultProps = {
  example: 5
};

export default SolidTabBar;

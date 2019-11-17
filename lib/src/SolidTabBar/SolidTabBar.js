import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import TabItem from "./components/TabItem/TabItem";
import styles from "./SolidTabBar.style";

const SolidTabBar = props => {
  const { tabs, initial, onPress, onChange } = props;
  const [selectedOne, setSelectedOne] = useState(initial || null);

  const { container } = styles;

  handleOnPress = item => {
    setSelectedOne(item.id);
    onPress && onPress(item);
    onChange && onChange(item);
  };

  renderTabs = () => {
    return (
      tabs &&
      tabs.length > 0 &&
      tabs.map(item => {
        const isActive = item.id === selectedOne;
        return (
          <TouchableOpacity key={item.id} onPress={() => handleOnPress(item)}>
            <TabItem text={item.text} isActive={isActive} {...props} />
          </TouchableOpacity>
        );
      })
    );
  };

  return <View style={container}>{renderTabs()}</View>;
};

export default SolidTabBar;

import React, { PureComponent } from "react";
import { View, TouchableOpacity } from "react-native";
import TabItem from "./components/TabItem/TabItem";
import styles from "./SolidTabBar.style";

export interface ISolidTabBarTypes {
  id: number;
  text: string;
}

interface IProps {
  initial?: number;
  tabs: Array<ISolidTabBarTypes>;
  onPress?: (item: ISolidTabBarTypes) => void;
  onChange?: (item: ISolidTabBarTypes) => void;
}

interface IState {
  selectedOne: number;
}

export default class SolidTabBar extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedOne: props.initial || 0,
    };
  }

  handleOnPress = (item: ISolidTabBarTypes) => {
    const { onPress, onChange } = this.props;
    this.setState({ selectedOne: item.id });
    onPress && onPress(item);
    onChange && onChange(item);
  };

  renderTabs = () => {
    const { tabs } = this.props;
    return (
      tabs &&
      tabs.length > 0 &&
      tabs.map((item: ISolidTabBarTypes) => {
        const isActive = item.id === this.state.selectedOne;
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => this.handleOnPress(item)}
          >
            <TabItem text={item.text} isActive={isActive} {...this.props} />
          </TouchableOpacity>
        );
      })
    );
  };

  render() {
    return <View style={styles.container}>{this.renderTabs()}</View>;
  }
}

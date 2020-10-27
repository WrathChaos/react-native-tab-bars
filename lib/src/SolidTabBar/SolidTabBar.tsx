import * as React from "react";
import { View, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SolidTabBar.style";
import TabItem from "./components/TabItem/TabItem";

export type CustomStyleProp =
  | StyleProp<ViewStyle>
  | Array<StyleProp<ViewStyle>>;

export interface ISolidTabBarTypes {
  id: number;
  text: string;
}

interface ISolidTabBarProps {
  Container?: any;
  initial?: number;
  style?: CustomStyleProp;
  tabs: Array<ISolidTabBarTypes>;
  onPress?: (item: ISolidTabBarTypes) => void;
  onChange?: (item: ISolidTabBarTypes) => void;
}

interface IState {
  selectedOne: number;
}

export default class SolidTabBar extends React.PureComponent<
  ISolidTabBarProps,
  IState
> {
  constructor(props: ISolidTabBarProps) {
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
    const { Container = View, style } = this.props;
    return (
      <Container {...this.props} style={[styles.container, style]}>
        {this.renderTabs()}
      </Container>
    );
  }
}

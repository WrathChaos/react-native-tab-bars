import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const TitledHeader = props => {
  const { title, enableShadow } = props;
  return (
    <View
      style={[
        {
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32
        },
        enableShadow && {
          shadowRadius: 8,
          shadowOpacity: 0.3,
          shadowColor: "#757575",
          shadowOffset: {
            width: 0,
            height: 3
          },
          backgroundColor: "#fff"
        }
      ]}
    >
      <View style={{ margin: 24 }}>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="ios-menu" type="Ionicons" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", right: 0 }}
            onPress={() => {}}
          >
            <Icon name="search" type="Feather" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 16 }}>
          <Text style={{ color: "#fff", fontSize: 30, fontWeight: "700" }}>
            {title}
          </Text>
          <Text style={{ color: "#aba396" }}>Protect our earth together</Text>
        </View>
      </View>
    </View>
  );
};

TitledHeader.propTypes = {
  title: PropTypes.string
};

TitledHeader.defaultProps = {
  title: "Discover"
};

export default TitledHeader;

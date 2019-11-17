import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default {
  container: {
    margin: 16,
    width: width * 0.9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
};

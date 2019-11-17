import React from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native";
import { SolidTabBar } from "react-native-tab-bars";
import LinearGradient from "react-native-linear-gradient";
import TitledHeader from "./src/components/TitledHeader/TitledHeader";

const dummyData = [
  { id: 0, text: "All" },
  { id: 1, text: "Birds" },
  { id: 2, text: "Fishes" },
  { id: 3, text: "Tigers" }
];

const App = () => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#534c45", "#a99a97"]}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TitledHeader />
        <SolidTabBar
          tabs={dummyData}
          initial={0}
          activeColor="#f0c614"
          shadowColor="#000"
          inactiveTextColor="#fff"
          onChange={data => console.log(data)}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;

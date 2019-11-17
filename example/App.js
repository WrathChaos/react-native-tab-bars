import React from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native";
import SolidTabBar from "./lib/src/SolidTabBar/SolidTabBar";

const dummyData = [
  { id: 0, text: "All" },
  { id: 1, text: "Birds" },
  { id: 2, text: "Fishes" },
  { id: 3, text: "Tigers" }
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SolidTabBar
          tabs={dummyData}
          initial={0}
          onChange={data => console.log(data)}
        />
      </SafeAreaView>
    </>
  );
};

export default App;

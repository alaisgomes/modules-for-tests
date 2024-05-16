import React from "react";
import { View, Text } from "react-native";

function MyModule() {
  return (
    <View>
      <Text>my-module</Text>
    </View>
  );
}

export default {
  title: "my-module",
  navigator: MyModule
};

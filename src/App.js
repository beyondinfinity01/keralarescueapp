import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import ContactScreen from "./screens/ContactScreen";
import MapScreen from "./screens/MapScreen";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RequestScreen from "./screens/RequestScreen";

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    headerMode: "none"
  }
);

MapStack.navigationOptions = {
  tabBarLabel: "Nearby",
  tabBarIcon: ({ focused }) => <Entypo name="map" color="grey" size={24} />
};

const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen
  },
  {
    headerMode: "none"
  }
);

ContactStack.navigationOptions = {
  tabBarLabel: "Contacts",
  tabBarIcon: ({ focused }) => (
    <MaterialIcons name="contacts" color="grey" size={24} />
  )
};

const MainTabNavigator = createBottomTabNavigator({
  MapStack,
  ContactStack
});

const RootNavigator = createStackNavigator({
  Main: MainTabNavigator,
  Request: RequestScreen
});

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import firebase from "firebase";
import ContactScreen from "./screens/ContactScreen";
import MapScreen from "./screens/MapScreen";

import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RequestScreen from "./screens/RequestScreen";

const config = {
  apiKey: "AIzaSyAU_iET0eeB4utSc_BWT3m8NM8rCOg4DYw",
  authDomain: "kerala-flood-rescue.firebaseapp.com",
  databaseURL: "https://kerala-flood-rescue.firebaseio.com",
  projectId: "kerala-flood-rescue",
  storageBucket: "kerala-flood-rescue.appspot.com",
  messagingSenderId: "278949494853"
};
firebase.initializeApp(config);

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

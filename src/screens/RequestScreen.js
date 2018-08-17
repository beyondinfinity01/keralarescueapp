import React from "react";
import { View, Text, Alert } from "react-native";
import HeaderButtons, { Item } from "react-navigation-header-buttons";
import database from "../api/database";
const t = require("tcomb-form-native");

var Form = t.form.Form;

let Request = t.struct({
  name: t.String
});

let options = { auto: "placeholders" };

let form;
async function onPress() {
  let value = form.getValue();
  if (value) {
    console.log(value);
    await database.sendRequest(value);
  }
}

class RequestScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Request Help",
      headerRight: (
        <HeaderButtons>
          <HeaderButtons.Item
            title="Done"
            onPress={async () => {
              await onPress();
              navigation.goBack();
            }}
          />
        </HeaderButtons>
      )
    };
  };

  render() {
    return (
      <View style={{ padding: 16 }}>
        <Form
          ref={ref => {
            form = ref;
          }}
          type={Request}
          options={options}
        />
      </View>
    );
  }
}

export default RequestScreen;

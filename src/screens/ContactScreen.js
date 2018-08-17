import React from "react";
import { View, Text, FlatList, Picker } from "react-native";

class ContactScreen extends React.Component {
  static navigationOptions = {
    title: "Important Contacts"
  };
  state = {
    district: "Wayanad"
  };
  renderContacts() {
    return <View />;
  }

  render() {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={[]}
          ListHeaderComponent={() => {
            return (
              <View>
                <Text>Select Your district</Text>
                <Picker
                  selectedValue={this.state.district}
                  style={{ height: 50, width: "100%" }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ district: itemValue })
                  }
                >
                  <Picker.Item label="Wayanad" value="wayanad" />
                </Picker>
              </View>
            );
          }}
          renderItem={() => {
            return <View />;
          }}
        />
      </View>
    );
  }
}

export default ContactScreen;

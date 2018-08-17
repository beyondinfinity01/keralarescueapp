import React from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";
import Mapbox from "@mapbox/react-native-mapbox-gl";
import database from "../api/database";

Mapbox.setAccessToken(
  "pk.eyJ1IjoiY2xvb2RvdCIsImEiOiJjamt3ZndvNmgweTdxM3dtcmZoNGc4cTl1In0.rMJhst0iWwdZ4tcGmZWOAg"
);

class MapScreen extends React.Component {
  state = {
    currentLocation: {
      latitude: 10.8505,
      longitude: 76.2711
    },
    error: ""
  };

  async componentDidMount() {
    console.log("component did mount");

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          currentLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          error: null
        });

        console.log(position);
      },
      error => {
        console.log(error);
        this.setState({ error: error.message });
      },
      { enableHighAccuracy: true, maximumAge: 1000 }
    );

    database.getRequestCollectionLive(value => {}, () => {});
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  renderAnnotations() {
    return (
      <Mapbox.PointAnnotation
        key="pointAnnotation"
        id="pointAnnotation"
        coordinate={[12.085068, 38.964086]}
      >
        <View
          style={{
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: 15
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: "orange",
              transform: [{ scale: 0.6 }]
            }}
          />
        </View>
        <Mapbox.Callout title="Look! An annotation!" />
      </Mapbox.PointAnnotation>
    );
  }

  renderBottomSheet(help) {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: 16,
          position: "absolute",
          bottom: 0,
          right: 0
        }}
        onPress={() => {
          help();
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              paddingTop: 8,
              paddingBottom: 8
            }}
          >
            Request Help
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { currentLocation } = this.state;
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Street}
          zoomLevel={8}
          centerCoordinate={[
            currentLocation.longitude,
            currentLocation.latitude
          ]}
          showUserLocation={true}
          style={{
            flex: 1
          }}
        >
          {this.renderAnnotations()}
        </Mapbox.MapView>
        {this.renderBottomSheet(() => {
          navigation.navigate("Request");
        })}
      </View>
    );
  }
}

export default MapScreen;

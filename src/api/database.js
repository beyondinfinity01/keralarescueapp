import firebase from "react-native-firebase";
import { GeoFirestore } from "geofirestore";
import { Alert } from "react-native";

function getGeoRequestRef() {
  return firebase.firestore().collection("requests");
}

function getRequestCollectionLive(onNext, onError) {
  const geoFirestore = new GeoFirestore(getGeoRequestRef());
  const geoQuery = geoFirestore.query({
    center: new firebase.firestore.GeoPoint(37.79, -122.41),
    radius: 10.5,
    query: ref => ref.limit(20)
  });
  geoQuery
    .query()
    .limit(20)
    .onSnapshot(onNext, onError);
}

async function sendRequest(request) {
  const collectionRef = getGeoRequestRef();
  const geoFirestore = new GeoFirestore(collectionRef);

  let data = {
    ...request,
    createdOn: firebase.firestore.FieldValue.serverTimestamp,
    isRescued: false,
    type: "rescue"
  };
  await geoFirestore.add({
    ...data,
    coordinates: new firebase.firestore.GeoPoint(37.79, -122.41)
  });

  navigator.geolocation.getCurrentPosition(
    async position => {
      // return {
      //   latitude: position.coords.latitude,
      //   longitude: position.coords.longitude
      // };
    },
    error => {
      console.log(error);
    },
    { enableHighAccuracy: true, maximumAge: 1000 }
  );
}

export default {
  sendRequest,
  getRequestCollectionLive
};

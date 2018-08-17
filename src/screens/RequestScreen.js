import React from "react";
import { View, Text, Alert ,StyleSheet, TouchableHighlight, TouchableOpacity} from "react-native";
//import HeaderButtons, { Item } from "react-navigation-header-buttons";

import { Container, Header, Content, Form, Item, Input, Left, Right, Title,Body,Button,Icon } from 'native-base';

// const t = require("tcomb-form-native");

// var Form = t.form.Form;

// let Request = t.struct({
//   name: t.String,

//   location: t.String,
//   requestee:t.String,
//   requesteePhone:t.Number,
//   GPS_Coordinates : t.String,
  

//   District : t.enums({
//     'alp':'Alappuzha - ആലപ്പുഴ',
//     'ekm':'Ernakulam - എറണാകുളം',
//     'idk':'Idukki - ഇടുക്കി',
//     'knr':'Kannur - കണ്ണൂർ',
//     'ksr':'Kasaragod - കാസർഗോഡ്',
//     'kol':'Kollam - കൊല്ലം',
//     'ktm':'Kottayam - കോട്ടയം',
//     'koz':'Kozhikode - കോഴിക്കോട്',
//     'mpm':'Malappuram - മലപ്പുറം',
//     'pkd':'Palakkad - പാലക്കാട്',
//     'ptm':'Pathanamthitta - പത്തനംതിട്ട',
//     'tvm':'Thiruvananthapuram - തിരുവനന്തപുരം',
//     'tcr':'Thrissur - തൃശ്ശൂർ',
//     'wnd':'Wayanad - വയനാട്',


//   }, 'District')
//     // a list of strings

// });




// const options = {
//   auto:"placeholders",

//   fields: { // <= Person options
//     district: {
//       item: { // <= options applied to each item in the list
//         label: 'My tag'
//       }
//     }
//   }
// };

// let form;
// async function onPress() {
//   console.log('inside onpress');
//   let value = form.getValue();
//   if (value) {
//     console.log(value);
//   }
// }




class RequestScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      initialLatitiude: null,
      initialLongitude:null,
      name:null,
      location: null,
      requestee:null,
      requesteephone:null,
      //   GPS_Coordinates : t.String,


    }
  }


checkForm(){
  
}

  componentDidMount() {
   

    navigator.geolocation.getCurrentPosition((position) => {
      let initialPosition = JSON.stringify(position);
     console.log(position);
      
      this.setState({ 
        initialLatitiude: position.coords.latitude, 
        initialLongitude: position.coords.longitude });
      
     
    });

  }


  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: "Request Help",
  //     headerRight: (
  //       <HeaderButtons>
  //         <HeaderButtons.Item
  //           title="Done"
  //           onPress={async () => {
  //             await onPress();
  //             navigation.goBack();
  //           }}
  //         />
  //       </HeaderButtons>
  //     )
  //   };
  // };


  static navigationOptions = {
    header :null
  }

  render() {
    return (
    

        <Container>
        <Header>
          <Left>
          <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Request Help</Title>
          </Body>
          <Right>

           <Button transparent>
              <Text style={{color:'#fff'}}>Save</Text>
            </Button>

          </Right>
        </Header>
        <Content>
        <Form>




            <Item>
              <Input placeholder="Name" onChangeText={(value)=>this.setState({name:value})}/>
            </Item>

             <Item>
              <Input placeholder="Location" onChangeText={(value)=>this.setState({location:value})}/>
            </Item>

             <Item>
              <Input placeholder="Requestee" onChangeText={(value)=>this.setState({requestee:value})}/>
            </Item>

             <Item>
              <Input placeholder="Requestee Phone" onChangeText={(value)=>this.setState({requesteephone:value})}/>
            </Item>

             <Item>
              <Input placeholder="GPS" value={this.state.initialLatitiude+', '+this.state.initialLongitude}/>
            </Item>
            
          </Form>
          </Content>
      </Container>
    );
  }
}

export default RequestScreen;

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
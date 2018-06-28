import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

import Buttons from './src/Buttons';
import Schedule from './src/Schedule';
import Loader from './src/Loader';

const statuses = ['available', 'pending', 'sold'];
const Joi = require('joi');

const joiSchema = Joi.array().items(Joi.object().keys({
  name: Joi.string(),
  status: Joi.string(),
}));

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: false
    };
  }

  componentDidMount(){
    this.getData(statuses[0]);
  }

  getData = status => {
    this.setState({
      isLoading: true,
    })
    axios.get("https://petstore.swagger.io/v2/pet/findByStatus", {
      params: {
        status,
      }
    })
    .then(response => {
    //console.log(response.data);
      this.setState({
        data: response.data,
        isLoading: false
      });
    })
    .catch((error) => {
      this.setState({isLoading: false})
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Loader
          isLoading={this.state.isLoading}
        />
        <Schedule
          data={this.state.data}
        />
        <Buttons
          statuses={statuses}
          getData={this.getData}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});

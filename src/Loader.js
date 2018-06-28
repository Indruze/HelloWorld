import React from 'react';
import { StyleSheet,View, ActivityIndicator, Dimensions } from 'react-native';

export default class Loader extends React.Component {
  render() {
    return (
      <View>
        {this.props.isLoading ? (
          <ActivityIndicator
            animating
            color="#000"
            size="large"
            style={styles.activityIndicator}
          />
        ) : null}
      </View>
    );
  }
};


const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  activityIndicator: {
    backgroundColor: 'rgba(225, 225, 225)',
    width: screen.width,
    height: screen.height,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

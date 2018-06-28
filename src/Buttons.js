import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Buttons = (props) => {
  return (
    <View style={styles.container}>
      {props.statuses.map(status =>
        (<Button
          key={status}
          title={status.toUpperCase()}
          onPress={() => props.getData(status)}
        />
      ))}
    </View>
  )
}

export default Buttons;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

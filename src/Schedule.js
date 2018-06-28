import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';


export default class Schedule extends React.Component {

  render() {
    return (
      <ScrollView>
        <List style={styles.list}>
          {this.props.data.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
              hideChevron={true}
            />
          ))
        }
        </List>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

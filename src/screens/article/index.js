import React from 'react';
import { Platform, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import { Text, Card, CardItem, Left, Right } from 'native-base';
import HTMLView from 'react-native-htmlview';


export default function articleScreen({ route, navigation }) {

  const { image, source_name, source_link, text } = route.params;

  return (
    <ScrollView>
      <Card>
        <CardItem cardBody>
          <Image style={styles.image} source={{ uri: image}}></Image>
        </CardItem>
        <CardItem cardBody style={{padding: 10, marginTop: 16}}>
          <Left>
            <Text style={styles.title}>Source</Text>
          </Left>
          <Right>
            <Text style={styles.link} onPress={() => Linking.openURL(source_link)}>{source_name}</Text>
          </Right>
        </CardItem>
        <CardItem header style={{padding: 10}}>
          <HTMLView value={text}/>
        </CardItem>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: null,
    flex: 1
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 10 : 16,
    fontWeight: 'bold',
    color: 'black'
  },
  link: {
    textAlign: 'right',
    fontSize: Platform.OS === 'ios' ? 10 : 16,
    color: 'blue'
  }
});
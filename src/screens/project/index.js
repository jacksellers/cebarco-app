import React from 'react';
import { Platform, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Card, CardItem, Left, Right, Badge } from 'native-base';
import HTMLView from 'react-native-htmlview';
import Moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function projectScreen({ route, navigation }) {
  const { image, client, consulting_engineer, contract_period, contract_completion, contract_price, text, category } = route.params;

  function Badges() {
    if (category == 'building') {
      return (
        <CardItem cardBody>
          <Badge info style={{marginRight: 10, borderWidth: 1}}>
            <Text style={styles.badge}>BUILDING <Ionicons name='business'/></Text>
          </Badge>
          <Badge style={{backgroundColor: 'white', marginRight: 10, borderWidth: 1}}>
            <Text style={styles.badge}>INFRASTRUCTURE <Ionicons name='build'/></Text>
          </Badge>
          <Badge style={{backgroundColor: 'white', marginRight: 10, borderWidth: 1}}>
            <Text style={styles.badge}>MOTORSPORT <Ionicons name='car-sport'/></Text>
          </Badge>
        </CardItem>
      );
    } else if (category == 'infrastructure') {
      return (
        <CardItem cardBody>
          <Badge style={{backgroundColor: 'white', marginRight: 10, borderWidth: 1}}>
            <Text style={styles.badge}>BUILDING <Ionicons name='business'/></Text>
          </Badge>
          <Badge info style={{marginRight: 10, borderWidth: 1}}>
            <Text style={styles.badge}>INFRASTRUCTURE <Ionicons name='build'/></Text>
          </Badge>
          <Badge style={{backgroundColor: 'white', marginRight: 10, borderWidth: 1}}>
            <Text style={styles.badge}>MOTORSPORT <Ionicons name='car-sport'/></Text>
          </Badge>
        </CardItem>
      );
    } else {
      return (
        <CardItem cardBody>
          <Badge style={{backgroundColor: 'white', marginRight: 10, borderWidth: 1}}>
            <Text  style={styles.badge}>BUILDING <Ionicons name='business'/></Text>
          </Badge>
          <Badge style={{backgroundColor: 'white', marginRight: 10, borderWidth: 1}}>
            <Text  style={styles.badge}>INFRASTRUCTURE <Ionicons name='build'/></Text>
          </Badge>
          <Badge info style={{marginRight: 10, borderWidth: 1}}>
            <Text style={styles.badge}>MOTORSPORT <Ionicons name='car-sport'/></Text>
          </Badge>
        </CardItem>
      );
    }
  }

  return (
    <ScrollView>
      <Card>
        <CardItem cardBody>
          <Image style={styles.image} source={{ uri: image}}></Image>
        </CardItem>
        <CardItem header style={{padding: 10}}>
          <Badges></Badges>
        </CardItem>
        <CardItem header style={{padding: 10}}>
          <Left>
            <Text style={styles.title}>Client</Text>
          </Left>
          <Right>
            <Text style={styles.text}>{client}</Text>
          </Right>
        </CardItem>
        <CardItem header style={{padding: 10}}>
          <Left>
            <Text style={styles.title}>Consulting engineer</Text>
          </Left>
          <Right>
            <Text style={styles.text}>{consulting_engineer}</Text>
          </Right>
        </CardItem>
        <CardItem header style={{padding: 10}}>
          <Left>
            <Text style={styles.title}>Contract period</Text>
          </Left>
          <Right>
            <Text style={styles.text}>{contract_period} months</Text>
          </Right>
        </CardItem>
        <CardItem header style={{padding: 10}}>
          <Left>
            <Text style={styles.title}>Contract completion</Text>
          </Left>
          <Right>
            <Text style={styles.text}>{Moment(contract_completion).format('MMM YYYY ')}</Text>
          </Right>
        </CardItem>
        <CardItem header style={{padding: 10}}>
          <Left>
            <Text style={styles.title}>Contract price</Text>
          </Left>
          <Right>
            <Text style={styles.text}>${contract_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
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
  text: {
    textAlign: 'right',
    fontSize: Platform.OS === 'ios' ? 10 : 16
  },
  badge: {
    fontSize: Platform.OS === 'ios' ? 6 : 12
  }
});
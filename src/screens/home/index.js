import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, View, Spinner, Card, CardItem } from 'native-base';
import Moment from 'moment';

import Client from '../../api';


var client = new Client();

export default function homeScreen({ navigation }) {

  const [projects, setProjects] = useState(undefined);

  useEffect(() => {
    const listProjects = async () => {
      const result = await client.listProjects();
      setProjects(result)
    }
    listProjects()
  }, [])

  Moment.locale('en');

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Project', item)}>
      <Card>
        <CardItem cardBody>
          <Image style={styles.image} source={{ uri: item.image}}></Image>
        </CardItem>
        <CardItem cardBody style={{padding: 10}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>{item.name}</Text>
        </CardItem>
        <CardItem cardBody style={{padding: 10, marginBottom: 8}}>
          <Text style={{fontSize: 12, color: 'black'}}>{Moment(item.contract_completion).format('MMM YYYY ')}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
  if (!projects) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner color='black' />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={projects}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    height: 250,
    width: null,
    flex: 1
  }
});
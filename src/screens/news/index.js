import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text, View, Spinner, Card, CardItem } from 'native-base';

import Client from '../../api';


var client = new Client();

export default function newsScreen({ navigation }) {

  const [articles, setArticles] = useState(undefined);

  useEffect(() => {
    const listArticles = async () => {
      const result = await client.listArticles();
      setArticles(result)
    }
    listArticles()
  }, [])
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('Article', item)}>
      <Card>
        <CardItem cardBody>
          <Image style={styles.image} source={{ uri: item.image}}></Image>
        </CardItem>
        <CardItem cardBody style={{padding: 10}}>
          <Text style={{fontWeight: 'bold', textTransform: 'uppercase', fontSize: Platform.OS === 'ios' ? 10 : 16}}>{item.title}</Text>
        </CardItem>
        <CardItem cardBody style={{padding: 10, marginBottom: 8}}>
          <Text style={{ fontSize: Platform.OS === 'ios' ? 10 : 16 }}>{item.intro}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
  if (!articles) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner color='black' />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
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
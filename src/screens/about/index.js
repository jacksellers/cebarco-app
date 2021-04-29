import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';
import { Text, Card, CardItem } from 'native-base';

import cebarco from '../../assets/Cebarco-1.jpg'
import khalid from '../../assets/khalid.png'
import peter from '../../assets/peter2.png'
import team from '../../assets/team.jpg'

import Client from '../../api';

var client = new Client();


export default function aboutScreen({ navigation }) {
  const [executives, setExecutives] = useState(undefined);

  useEffect(() => {
    const listExecutives = async () => {
      const result = await client.listExecutives();
      setExecutives(result)
    }
    listExecutives()
  }, [])
  const renderItem = ({ item }) => (
    <Card>
      <CardItem cardBody>
        <Image style={styles.portrait} source={{ uri: item.image}}></Image>
      </CardItem>
      <CardItem cardBody style={{padding: 10}}>
        <Text style={{fontSize: Platform.OS === 'ios' ? 10 : 16, fontWeight: 'bold', textTransform: 'uppercase'}}>{item.position}</Text>
      </CardItem>
      <CardItem cardBody style={{padding: 10, marginBottom: 8}}>
        <Text style={{ fontSize: Platform.OS === 'ios' ? 10 : 16 }}>{item.first_name} {item.last_name}</Text>
      </CardItem>
    </Card>
  );
  const header = ({ item }) => (
    <ScrollView>
      <Card>
        <CardItem cardBody>
        <Text style={styles.title}>
          Introduction
        </Text>
        </CardItem>
        <CardItem cardBody>
          <Text style={styles.text}>
            Cebarco (Civil Engineering, Building and Construction) was founded in 1992 by Khalid Abdulrahim.
            We form the focal point of the KAR Group and provide our clients with unparalleled managerial, technical and
            engineering services. As a Grade AA contractor (certified by the Bahrain Ministry of Work, Municipalities Affairs &
            Urban Planning), Cebarco is considered to be part of the local construction elite. Clients can take comfort in our
            commitment to the quality, health, safety and environmental issues surrounding all of our projects.
          </Text>
        </CardItem>
        <CardItem cardBody>
          <Image style={styles.landscape} source={cebarco}></Image>
        </CardItem>
        <CardItem cardBody>
          <Text style={styles.text}>
            As Bahrain has grown into a thriving 21st century economy, Cebarco has grown with it,
            taking on some of the nation's biggest projects along the way. These include the Bahrain International Circuit,
            City Centre Bahrain, Isa Cultural Centre and New Exhibition & Convention Centre. Completing the racing circuit in
            just 16 months (6 weeks ahead of schedule) paved the way for Bahrain's first ever Formula One grand prix in 2004
            and established Cebarco's reputation for building world class motorsports venues. This led to us being awarded
            contracts for both the Bahrain International Karting Circuit and the Yas Marina Circuit.
            {"\n"}{"\n"}
            Cebarco has a wealth of expertise encompassing most forms of hotels, commercial, retail, sports facilities, military,
            and residential building construction as well as significant infrastructure projects such as data centres, roads,
            bridges, substations, and sewage treatment plants. Our headquarters is in the Kingdom of Bahrain with operations
            also in Cyprus and the UAE.
          </Text>
        </CardItem>
      </Card>
      <Card>
        <CardItem cardBody>
          <Text style={styles.title}>
            Our Chairman
          </Text>
        </CardItem>
        <CardItem cardBody>
          <Text style={styles.text}>
            Khalid Abdulrahim is the chairman of Cebarco and the KAR Group. He has a Master's degree in Construction
            Management from Glasgow Caledonian University and is a fellow of both the Chartered Institute of Building and
            Association of Cost Engineers. He left his role as director of Hafeera Contracting in 1992 to start Cebarco,
            which has since grown into one of Bahrain's largest construction companies.
          </Text>
        </CardItem>
        <Card>
          <CardItem cardBody>
            <Image style={styles.portrait} source={khalid}></Image>
          </CardItem>
          <CardItem cardBody>
            <Text style={styles.text}>
              <Text style={styles.title}>"</Text>
              <Text style={styles.text}>
                We see every challenge as an opportunity to serve as an advocate for our clients, completing even the
                toughest projects. In good times and bad, we work hard to become partners with our clients and understand
                their businesses. That knowledge helps us keep costs low whilst maintaining high standards.
                It also allows us to think outside of the box and make suggestions they may not have considered before.
              </Text>
              <Text style={styles.title}>"{"\n"}{"\n"}</Text>
              <Text style={styles.title}> - Khalid Abdulrahim</Text>
            </Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem cardBody>
            <Text style={styles.title}>
              Our CEO
            </Text>
          </CardItem>
          <CardItem cardBody>
            <Text style={styles.text}>
              Peter Sellers is the CEO of Cebarco and has over 30 years of experience in the construction industry.
              He is a chartered quantity surveyor, has an MBA from Strathclyde University and is a member of several
              professional organisations; representing Bahrain on the RICS (Royal Institution of Chartered Surveyors)
              regional working committee.
            </Text>
          </CardItem>
          <CardItem cardBody>
            <Image style={styles.portrait} source={peter}></Image>
          </CardItem>
          <CardItem cardBody>
            <Text style={styles.text}>
              <Text style={styles.title}>"</Text>
              <Text style={styles.text}>
                Developing a team is vital to the successful delivery of our client’s projects.
                We do this by investing in people and creating strong relationships so that we are all pulling together
                in the right direction.
              </Text>
              <Text style={styles.title}>"{"\n"}{"\n"}</Text>
              <Text style={styles.title}> - Peter Sellers</Text>
            </Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem cardBody>
            <Text style={styles.title}>
              Our Mission
            </Text>
          </CardItem>
          <CardItem cardBody>
            <Text style={styles.text}>
              1. To <Text style={styles.bold}>become the contractor</Text><Text style={styles.text}> of choice by consistently adding value to all of our clients and stakeholders{"\n"}{"\n"}
              2. To </Text><Text style={styles.bold}>serve our clients</Text><Text style={styles.text}>, no matter how big or small, by structuring our organization accordingly{"\n"}{"\n"}
              3. To </Text><Text style={styles.bold}>build a better future</Text><Text style={styles.text}> through smart construction practices, effective teamwork and an efficient use of resources</Text>
            </Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem cardBody>
            <Text style={styles.title}>
              Our Team
            </Text>
          </CardItem>
        </Card>
      </Card>
    </ScrollView>
  );
  const footer = ({ item }) => (
    <CardItem cardBody>
      <Image style={styles.landscape} source={team}></Image>
    </CardItem>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={executives}
        renderItem={renderItem}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  landscape: {
    height: 250,
    width: null,
    flex: 1
  },
  portrait: {
    height: 400,
    width: null,
    flex: 1
  },
  title: {
    fontSize: Platform.OS === 'ios' ? 14 : 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'justify'
  },
  text: {
    fontSize: Platform.OS === 'ios' ? 10 : 16,
    padding: 10,
    textAlign: 'justify'
  },
  bold: {
    fontSize: Platform.OS === 'ios' ? 10 : 16,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'justify'
  }
});
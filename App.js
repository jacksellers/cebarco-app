import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import homeScreen from './src/screens/home';
import projectScreen from './src/screens/project';
import newsScreen from './src/screens/news';
import articleScreen from './src/screens/article';
import aboutScreen from './src/screens/about';

import logo from './src/assets/logo-big.png'


const HomeStack = createStackNavigator();
const NewsStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 160, height: 40 }}
      source={logo}
    />
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Cebarco' component={homeScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
      <HomeStack.Screen name='Project' component={projectScreen} options={({ route }) => ({ title: route.params.name })}/>
    </HomeStack.Navigator>
  );
}

function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name='News' component={newsScreen}/>
      <NewsStack.Screen name='Article' component={articleScreen} options={({ route }) => ({ title: route.params.title })}/>
    </NewsStack.Navigator>
  );
}

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name='About' component={aboutScreen}/>
    </AboutStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'md-home';
            } else if (route.name === 'News') {
              iconName = 'md-newspaper';
            } else {
              iconName = 'md-help-circle';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='News' component={NewsStackScreen} />
        <Tab.Screen name='About' component={AboutStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

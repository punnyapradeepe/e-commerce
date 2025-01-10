import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HomeScreen from '../Screens/HomeScreen';
import ShoppingScreen from '../Screens/ShoppingScreen';
import CartScreen from '../Screens/CartScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: () => null,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: styles.tabBar,
        
      }}
    >
         <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo 
              name="home" 
              size={24} 
              color={focused ? 'black' : 'gray'} 
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : 'gray', fontSize: 12 }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name='shopping'
        component={ShoppingStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('shopping');
            navigation.reset({
              index: 0,
              routes: [{ name: 'shopping' }],
            });
          },
        })}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo 
              name="shopping-bag" 
              size={24} 
              color={focused ? 'black' : 'gray'} 
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : 'gray', fontSize: 12 }}>
              Shopping
            </Text>
          ),
        }}
      />
          <Tab.Screen
        name="cart"
        component={CartStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('cart');
            navigation.reset({
              index: 0,
              routes: [{ name: 'cart' }],
            });
          },
        })}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo 
              name="shopping-cart" 
              size={24} 
              color={focused ? 'black' : 'gray'} 
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : 'gray', fontSize: 12 }}>
              Cart
            </Text>
          ),
        }}
      />


      <Tab.Screen
        name='profile'
        component={ProfileStack}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault(); 
            navigation.navigate('profile');
            navigation.reset({
              index: 0,
              routes: [{ name: 'profile' }],
            });
          },
        })}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="account-circle" size={24} color={focused ? 'black' : 'gray'}/>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : 'gray', fontSize: 12 }}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => (
  <Stack.Navigator initialRouteName="home">
    <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: true ,title:''}} />
  </Stack.Navigator>
);

const ShoppingStack = () => (
  <Stack.Navigator initialRouteName="shoppe">
    <Stack.Screen name="shoppe" component={ShoppingScreen} options={{ headerShown: true ,title:'' }} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator initialRouteName="profile">
    <Stack.Screen name="profile" component={ProfileScreen} options={{ headerShown: true,title:'' }} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator initialRouteName="cart">
    <Stack.Screen name="cart" component={CartScreen} options={{ headerShown: true ,title:''}} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    alignItems:'center'
  },
});

export default TabNavigation;

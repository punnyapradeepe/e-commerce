import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Colors from '../Utils/Colors';

const footerData = [
  {
    icon:<Image source={require('./../../assets/Images/fast delivery.png')} style={{width:20,height:20}} /> ,
    title: 'Free Shipping',
    description: 'Order above $200',
  },
  {
    icon:<Image source={require('./../../assets/Images/money.png')} style={{width:20,height:20}} /> ,
    title: 'Money Back',
    description: '30 Days Guarantee',
  },
  {
    icon:<Image source={require('./../../assets/Images/money.png')} style={{width:20,height:20}} /> ,
    title: 'Secure Payment',
    description: 'Secured by stripe',
  },

  {
    icon:<Image source={require('./../../assets/Images/call.png')} style={{width:20,height:20}} /> ,
    title: 'Quality Support',
    description: 'Phone and email support',
  },
];

const Footer = () => {
  return (
    <View style={styles.container}>
      {footerData.map((item, index) => (
        <View key={index} style={styles.view}>
          {item.icon}
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap:2,
    marginTop: 10,
  
  },
  view: {
    backgroundColor: Colors.gray,
    padding:5,
    width: '25%',
    padding: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
});

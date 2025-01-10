import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import Colors from '../Utils/Colors'
import axios from 'axios';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://mern-e-commerce-website-gf4v.onrender.com/api/admin/products/get');
        setProducts(response.data.data);
        console.log(products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
     <View style={styles.box}>
     <View style={styles.productimg}>  
     </View>
     <View style={styles.absolute}>
     <View style={styles.new}>
     <Text style={styles.newtext}>New</Text>
     </View>
     <View style={styles.percent}>
     <Text style={styles.percenttext}>New</Text>
     </View>
     <View style={styles.btncenter}>
     <TouchableOpacity style={styles.btn}>
     <Text style={styles.btntext}>Add to cart</Text>
     </TouchableOpacity>
     </View>
     </View>
     <View style={styles.ratingstar}>
     <Image source={require('./../../assets/Images/Rating Group.png')}/>
     </View>
     </View>
    </View>
  )
}

export default Products
const styles = StyleSheet.create({
container:{
paddingTop:10
},
box:{
 width:150,
 height:230,
 backgroundColor:Colors.white,
 borderWidth:1,
 borderColor:Colors.gray
},
productimg:{
    backgroundColor:Colors.gray,
    width:"100%",
    height:'75%',
    position:'relative'
},
absolute:{
    position:'absolute'
},
new:{
    width:40,
    height:15,
    backgroundColor:'white',
    top:5,
    left:5,
    alignItems:'center',
    borderRadius:5
},
newtext:{
fontSize:12,
fontWeight:'bold'
},
percent:{
    width:40,
    height:15,
    backgroundColor:'#38CB89',
    top:5,
    left:5,
    alignItems:'center',
    marginTop:5,
    borderRadius:5
},
percenttext:{
    fontSize:12,
    fontWeight:'bold'
},
btn:{
    backgroundColor:Colors.black,
    paddingHorizontal:30,
    paddingVertical:5,
    borderRadius:5,
},
btntext:{
    color:'white'
},
btncenter:{
alignItems:'center',
top:"100%"
},
ratingstar:{
    top:3,
    left:3
},

})
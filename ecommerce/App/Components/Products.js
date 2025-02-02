import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Colors from '../Utils/Colors';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://mern-e-commerce-website-gf4v.onrender.com/api/admin/products/get');
        setProducts(response.data.data.slice(0, 5));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const renderProduct = ({ item }) => (
    <View style={styles.box}>
  
      <View style={styles.productimg}>
        <Image
          source={{ uri: item.image[0] }} 
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <View style={{position:'absolute'}}>
        <View style={styles.new}>
      <Text style={styles.newtext}>NEW</Text>
      </View>
      <View style={styles.percent}>
     <Text style={styles.percenttext}>50%</Text>
     </View>
     </View>
         <View style={styles.btncenter}>
        <TouchableOpacity style={styles.btn}
        >
          <Text style={styles.btntext}>Add to cart</Text>
        </TouchableOpacity>
      </View>
      </View>
        <View style={styles.ratingstar}>
        <Image source={require('./../../assets/Images/Rating Group.png')}/>
        </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.productTitle}</Text>
        <View style={styles.pricecontainer}>
        <Text style={styles.price}>$ {item.price}</Text>
        <Text style={styles.mrp}>$ {item.mrp}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.textcontainer}>
            <View style={styles.newtitle}>
            <Text style={styles.newt}>New</Text>
            <Text style={styles.newt}>Arrivals</Text>
            </View>
            <TouchableOpacity style={styles.moreview}
            onPress={()=>navigation.navigate('shopping')}
            >
            <Text style={styles.more}>More Products</Text>
            <Feather name="arrow-right" size={12} color="black" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
        </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={renderProduct}
        contentContainerStyle={styles.listContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex:1, 
    paddingBottom:10
  },
  listContainer: {
    flexDirection:'row',
   
  },
  box: {
    width: 150,
    height: 230,
    backgroundColor: Colors.white,
    marginRight:10,
    overflow: 'hidden',
  },
  productimg: {
    backgroundColor: Colors.gray,
    width: '100%',
    height: '70%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    position:'relative'
  },
  titleContainer: {
    top:3,
    left:3
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.black,
  },
  btn: {
    backgroundColor: Colors.black,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btntext: {
    color: 'white',
  },
  btncenter: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  ratingstar:{
        top:3,
        left:3,
        width:20,
        height:20
    },
    pricecontainer:{
        flexDirection:'row',
        gap:10

    },
    price:{
        fontSize:12,
        fontWeight:'500',
        marginTop:5
    },
    mrp:{
        fontSize:12,
        fontWeight:'500',
        marginTop:5,
        color:'grey',
        textDecorationLine:'line-through'
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
    fontSize:10,
    fontWeight:'bold',
    textAlign:'center',
    color:'white'
},
textcontainer:{
    flexDirection:'row',
    justifyContent:'space-between'
},
newtitle:{
    flexDirection:'column',
    gap:2,
    paddingBottom:15
},
newt:{
    fontSize:25,
    fontWeight:'500'
},
moreview:{
    flexDirection:'row',
    alignItems:'flex-end',
    paddingBottom:15,
 
},
more:{
    fontSize:12,
    fontWeight:'300',
    borderBottomWidth:1,
    borderColor:'gray'
}
});

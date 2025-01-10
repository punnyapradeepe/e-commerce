import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Carousel from '../Components/Carousel'
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
   <View style={styles.container}>
     <Carousel/>
     <View style={styles.simplycontainer}>
      <View style={{marginTop:20}}>
      <Text style={styles.simply}>Simply Unique/</Text>
      <Text style={styles.simply}>Simply Better</Text>
      </View>
      <View style={{marginTop:20}}>
      <Text style={styles.elegent}><Text style={{fontWeight:'500'}}>3legant</Text><Text> is a gift store based</Text></Text>
      <Text style={styles.elegent}> in HCMC,Vietnma,Est since 2019</Text>
      
     </View>
     </View>
     <View style={{flex:1,flexDirection:'row',gap:5,width:"100%",height:"100%" ,marginTop:20,}}>
      <Image source={require('./../../assets/Images/Image Placeholder.png')} style={{width:"50%",height:205,position:'relative'}}/>
      <View style={{position:'absolute',top:10,left:20}} >
      <Text style={{fontSize:16,fontWeight:'400'}}>Living Room</Text>
      <TouchableOpacity style={{ flexDirection: 'row', gap: 4, alignItems: 'center', marginBottom: 5 ,marginTop:3}}>
        <View style={{ borderBottomWidth:0.3, borderBottomColor: 'black', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 10, fontWeight: '300' }}>Shop Now</Text>
          <Feather name="arrow-right" size={12} color="black" style={{ marginLeft: 4 }} />
        </View>
      </TouchableOpacity>
      </View>
      <View style={{width:'100%',flexDirection:'column',gap:5}}>
      <Image source={require('./../../assets/Images/Image Placeholder-1.png')} style={styles.rightimg} />
      <View style={{position:'absolute',top:55,left:5}} >
      <Text style={{fontSize:16,fontWeight:'400'}}>Bedroom</Text>
      <TouchableOpacity style={{ flexDirection: 'row', gap: 4, alignItems: 'center', marginBottom: 5 ,marginTop:3}}>
        <View style={{ borderBottomWidth:0.3, borderBottomColor: 'black', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 10, fontWeight: '300' }}>Shop Now</Text>
          <Feather name="arrow-right" size={12} color="black" style={{ marginLeft: 4 }} />
        </View>
      </TouchableOpacity>
      </View>
      <Image source={require('./../../assets/Images/Image Placeholder-2.png')} style={styles.rightimg}/>
      <View style={{position:'absolute',top:55,left:5}} >
      <Text style={{fontSize:16,fontWeight:'400'}}>Bedroom</Text>
      <TouchableOpacity style={{ flexDirection: 'row', gap: 4, alignItems: 'center', marginBottom: 5 ,marginTop:3}}>
        <View style={{ borderBottomWidth:0.3, borderBottomColor: 'black', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 10, fontWeight: '300' }}>Shop Now</Text>
          <Feather name="arrow-right" size={12} color="black" style={{ marginLeft: 4 }} />
        </View>
      </TouchableOpacity>
      </View>
      </View>
     </View>
    </View>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
container:{
  padding:10 ,
  backgroundColor:'white',
  flex:1
},
simply:{
  fontSize:25,
  fontWeight:'700'
},
elegent:{
  fontSize:10,
  fontWeight:'200'
},
simplycontainer:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center'
},
rightimg:{
  width:"50%",
  height:100,
  position:'relative'
},
})
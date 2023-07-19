import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) =>{
    return(
        <View style={styles.items}>
        <View style={styles.itemleft}>
        <View style={styles.square}></View>
        <Text>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
        </View>
    );
}

const styles=StyleSheet.create({
items:{
    backgroundColor: '#fff',
    padding:15,
   borderRadius:10,
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   marginBottom:20
},
itemleft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap',
},
square:{
    width:24,
    height:24,
    opacity:0.4,
    backgroundColor:'#558Cf6',
    borderRadius:5,
    marginRight:17,
},
text:{
    maxWidth:'80%'
},
circular:{
    width:12,
    height:12 ,
    borderColor:'#558CF6',
    borderWidth:2,
    borderRadius:5,
}
})
export default Task;
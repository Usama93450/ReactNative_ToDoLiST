import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import { KeyboardAvoidingView,TextInput } from 'react-native';
import { Keyboard } from 'react-native';
export default function App() {
  const [task,setTask]=useState();
  const [taskitems,setTaskitems]=useState([])
  const handleSubmit = () =>{
  Keyboard.dismiss();
   setTaskitems([...taskitems,task])
   setTask(null);
  }
  const completeTask = (index) => {
    let itemcopy=[...taskitems];
    itemcopy.splice(index,1)
    setTaskitems(itemcopy);
  }
  return (
    <>
    <View style={styles.container}>
    <View style={styles.taskWrapper}>
    <Text style={styles.sectionTitle}>Today's Tasks</Text>
    <View style={styles.Items}>
    {
      taskitems.map((items,index) => {
        return(
          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
          <Task  text={items}/>
          </TouchableOpacity>
        )
      })
    }
      {/* <Task text={'Task 1'}/>
      <Task text={'Task 2'}/> */}
    </View>
    </View>
    </View>
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}
    >
    <TextInput
          style={styles.input}
          placeholder="Write a Task"
          onChangeText={text => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  Items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    width:250,
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{},
});

import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput,  TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, addTask] = useState([]);

  const taskHandler = () => {
    Keyboard.dismiss();
    addTask([...taskItems, task])
    setTask(null);
  }

  const taskDone = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    addTask(itemCopy);
  }

  return (
    <View style={styles.container}>
    {                      }
     
      <View style = {styles.wrapper}>
        <Text style={styles.title}> Tasks </Text>

        <View style = {styles.items}>
        {                             }
        {taskItems.map((item, index) => {
          return(
          <TouchableOpacity key={index} onPress = {() => taskDone(index)}>
            <Task text = {item} />
          </TouchableOpacity>
          )
          
        })}
          
        </View>
      </View>
      <KeyboardAvoidingView
     behavior={Platform.OS === 'ios' ? "padding" : "height"}
     style={styles.writeTaskWrapper}
     >
     
      <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => taskHandler()}>
        <View style = {styles.addWrapper}>
            <Text style = {styles.addTask}>+</Text>
        </View>
      </TouchableOpacity>
     </KeyboardAvoidingView>
    </View>

   

    
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'black',

  },
  wrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  items: {
    margin: 30,
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'blue'
  },

  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'grey',
    width: 250,
    textShadowColor: '#74dedc',
    color: 'black',
    fontWeight: 'bold',
    
    

  },

  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
   
  },

  addTask: {
    fontSize: 30,
  }



});

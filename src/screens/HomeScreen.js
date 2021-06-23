import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{marginHorizontal: 12}} >
      <StatusBar backgroundColor={`rgba(0,0,0,0.10)`}/>
      <Text style={{fontSize: 24, fontWeight: "bold"}}>Home Screen</Text>
      <View style={{marginVertical: 12}}>
        <Button title="Go To Salary" onPress={() => navigation.navigate("Salary")}/>
      </View>
      <Button title="Go To Deduction" onPress={() => navigation.navigate("Deduction")}/>
      <Button title="Go To Result" onPress={() => navigation.navigate("Result")}/>
    </View>
    
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;

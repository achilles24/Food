import "react-native-gesture-handler";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "./src/screens/HomeScreen";
import HraScreen from "./src/screens/HraScreen";
import GratuityScreen from "./src/screens/GratuityScreen";
import SalaryScreen from "./src/screens/SalaryScreen";
import DeductionScreen from "./src/screens/DeductionScreen";
  
function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Salary" component={SalaryScreen}/>
      <Stack.Screen name="Deduction" component={DeductionScreen}/>
    </Stack.Navigator>
  )
}
const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Income Tax" component={HomeStack}/>
        <Drawer.Screen name="Hra" component={HraScreen}/>
        <Drawer.Screen name="Gratuity" component={GratuityScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import Upcoming from "./Upcoming";
import Past from "./Past";


const Tab = createMaterialTopTabNavigator();

const Topbar = () => {
  return ( 
  <Tab.Navigator initialRouteName="Upcoming" screenOptions={{
    tabBarLabelStyle: {
      fontSize: 16,
      fontWeight: "500",
      width: 150,
    },
    
  }}>
    <Tab.Screen name="Upcoming" component={Upcoming}/>
    <Tab.Screen name="Past" component={Past}/>
    
  </Tab.Navigator>
  )
}

export default Topbar


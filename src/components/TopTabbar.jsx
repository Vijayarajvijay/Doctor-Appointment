import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import InPersonAppointment from "../Screens/InPersonAppointment";
import OnlineAppointment from "../Screens/OnlineAppointment";

const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
  return ( 
  <Tab.Navigator initialRouteName="In Person" screenOptions={{
    tabBarLabelStyle: {
      fontSize: 16,
      fontWeight: "500",
      width: 150,
    },
    
  }}>
    <Tab.Screen name="In Person" component={InPersonAppointment}/>
    <Tab.Screen name="Online" component={OnlineAppointment}/>
  </Tab.Navigator>
  )
}

export default TopTabbar


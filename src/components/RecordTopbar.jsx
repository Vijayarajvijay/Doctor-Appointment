import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";

import RecDirectAppointment from "../Screens/RecDirectAppointment";
import RecOnlineAppointment from "../Screens/RecOnlineAppointment";

const Tab = createMaterialTopTabNavigator();

const RecordTopbar = () => {
  return ( 
  <Tab.Navigator initialRouteName="In Person" screenOptions={{
    tabBarLabelStyle: {
      fontSize: 16,
      fontWeight: "500",
      width: 150,
    },
    
  }}>
    <Tab.Screen name="In Person" component={RecDirectAppointment}/>
    <Tab.Screen name="Online" component={RecOnlineAppointment}/>
  </Tab.Navigator>
  )
}

export default RecordTopbar


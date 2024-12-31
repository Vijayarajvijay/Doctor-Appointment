import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';
import Home from '../Screens/Home';
import { Colors } from '../Constant';
import Icons from "react-native-vector-icons/MaterialIcons";
import Iconclip from "react-native-vector-icons/MaterialCommunityIcons";
import Menus from '../Screens/Menus';
import Records from '../Screens/Records';
import Appointments from '../Screens/Appointments';
import TopTabbar from './TopTabbar';
import RecordTopbar from './RecordTopbar';

const Tab = createBottomTabNavigator();

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
      <Icons name="arrow-back" size={24} color={Colors.secondary} />
    </TouchableOpacity>
  );
};

const BottomTabbarMenu = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        tabBarStyle: {
          paddingBottom: 3,
          backgroundColor: Colors.white,
          height: 60,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
        headerTitleStyle: {
          color: Colors.secondary, // Set the header label color here
        },
        headerLeft: () => <BackButton />, // Add the back button
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ colour, size, focused }) => (
            <Icons
              name="home"
              color={focused ? Colors.secondary : Colors.gray}
              size={30}
            />
          ),
          headerShown: false, // Hide header for this screen
        }}
      />
      <Tab.Screen
        name='Records'
        component={RecordTopbar}
        options={{
          tabBarIcon: ({ colour, size, focused }) => (
            <Iconclip
              name="clipboard-text-clock-outline"
              color={focused ? Colors.secondary : Colors.gray}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Appointment'
        component={TopTabbar}
        options={{
          tabBarIcon: ({ colour, size, focused }) => (
            <Iconclip
              name="calendar-text-outline"
              color={focused ? Colors.secondary : Colors.gray}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Menu'
        component={Menus}
        options={{
          tabBarIcon: ({ colour, size, focused }) => (
            <Icons
              name="menu"
              color={focused ? Colors.secondary : Colors.gray}
              size={30}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabbarMenu;

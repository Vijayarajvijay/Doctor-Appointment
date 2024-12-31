import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Arrow from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../Constant';
import { useNavigation } from '@react-navigation/native';
const Menus = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate('Login') }
      ]
    );
  };

  const menuItems = [
    { icon: 'person-sharp', text: 'My Profile', screen: 'My Profile' },
    { icon: 'notifications-sharp', text: 'Notifications', screen: 'Notifications' },
    { icon: 'help-circle-sharp', text: 'Help & Support', screen: 'Help and Support' },
    { icon: 'share-social-sharp', text: 'Share the App', screen: 'ShareApp' },
    { icon: 'star-sharp', text: 'Review', screen: 'Reviews' },
    { icon: 'information-circle-sharp', text: 'About Us', screen: 'About Us' },
    { icon: 'log-out-sharp', text: 'Logout', screen: '', action: handleLogout },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.medLogoContainer}>
          <Image
            style={styles.medLogo}
            source={require('../assets/images/Group 187.png')}
          />
          <Text style={styles.appName}>Health Visit</Text>
        </View>
      </View>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => item.action ? item.action() : navigation.navigate(item.screen)}
        >
          <Icon name={item.icon} size={30} color={Colors.secondary} style={styles.icon} />
          <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.menuText}>{item.text}</Text>
            <Arrow name='arrow-right-drop-circle-outline' style={{ alignSelf: 'center' }} size={18} color={Colors.gray} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.borderDarl,
    paddingBottom: 40,
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  icon: {
    marginRight: 20,
  },
  menuText: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },
  medLogoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 40,
  },
  medLogo: {
    width: '18%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  appName: {
    color: Colors.secondary,
    fontSize: 25,
    fontWeight: '900',
    alignItems: 'center',
    marginTop: 15,
  },
});

export default Menus;

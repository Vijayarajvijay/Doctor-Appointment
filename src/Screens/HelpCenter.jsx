import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../Constant';

const HelpAndSupport = () => {

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:support@healthvisit.com');
  };

  const handleLocationPress = () => {
    const address = '123 Main Street, City, Country';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={{width:300,height:220}} source={require("../assets/images/help.png")}/>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How can I book an appointment?</Text>
          <Icon name="chevron-forward" size={24} color={Colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I cancel my appointment?</Text>
          <Icon name="chevron-forward" size={24} color={Colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>What should I bring to my appointment?</Text>
          <Icon name="chevron-forward" size={24} color={Colors.gray} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How can I contact the doctor?</Text>
          <Icon name="chevron-forward" size={24} color={Colors.gray} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
          <Icon name="call" size={24} color={Colors.secondary} />
          <Text style={styles.contactText}>+123 456 7890</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
          <Icon name="mail" size={24} color={Colors.secondary} />
          <Text style={styles.contactText}>support@healthvisit.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem} onPress={handleLocationPress}>
          <Icon name="location" size={24} color={Colors.secondary} />
          <Text style={styles.contactText}>123 Main Street, City, Country</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Social Media</Text>
        <View style={styles.socialMedia}>
          <TouchableOpacity style={styles.socialIcon}>
           <Image style={{width:50,height:50}} source={require("../assets/images/facebook1.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
          <Image style={{width:50,height:50}} source={require("../assets/images/twitter1.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
          <Image style={{width:50,height:50}} source={require("../assets/images/instagram1.png")}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Your App Name. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.secondary,
    marginBottom: 20,
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    marginBottom: 10,
  },
  faqQuestion: {
    fontSize: 16,
    color: Colors.gray,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.gray,
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialIcon: {
    padding: 10,
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
    paddingTop: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: Colors.black,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    color: Colors.secondary,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    lineHeight: 24,
  },
});

export default HelpAndSupport;

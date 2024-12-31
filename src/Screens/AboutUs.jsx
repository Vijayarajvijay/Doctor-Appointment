import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import { Colors } from '../Constant';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


const AboutUs = () => {
  const navigation = useNavigation();
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
        <Image
          style={styles.headerImage}
          source={require('../assets/images/DOC1.png')}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionContent}>
          Our mission is to provide top-quality healthcare services to our patients with the utmost care and compassion. We aim to make healthcare accessible and convenient for everyone.
        </Text>

        <Text style={styles.sectionTitle}>Our Doctor</Text>
        <View style={styles.doctorContainer}>
          <Image
            style={styles.doctorImage}
            source={require('../assets/images/doctorprofile.jpg')}
          />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dr. John Doe</Text>
            <Text style={styles.doctorSpecialty}>Specialist in Cardiology</Text>
            <Text style={styles.doctorDescription}>
              Dr. John Doe has over 20 years of experience in cardiology and is dedicated to providing the best care to his patients. He is known for his expertise and compassionate approach.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Our Services</Text>
        <Text style={styles.sectionContent}>
          We offer a wide range of healthcare services including consultations, check-ups, and specialized treatments. Our goal is to ensure that you receive the best possible care.
        </Text>

        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionContent}>
          If you have any questions or need further information, feel free to contact us. We are here to help you.
        </Text>

        <View style={styles.section}>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  header: {
    // backgroundColor: Colors.primary,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerImage: {
    width: 300,
    height: 180,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: -30,
  },
  contentContainer: {
    padding: 20,
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
  doctorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  doctorDescription: {
    fontSize: 14,
    color: '#777',
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
});

export default AboutUs;

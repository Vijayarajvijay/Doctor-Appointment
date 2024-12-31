import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Linking
} from 'react-native';
import { Colors } from '../Constant';
import { useNavigation } from '@react-navigation/native';

const BookingSummary = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [issue, setIssue] = useState('');
  const navigation = useNavigation()

  const cost = '500'

  const payWithUPI = async () => {
    const upiURL = `upi://pay?pa=pudumaitamilselvan@okicici&pn=John Doe&tn=Payment&am=${cost}&cu=INR`;

    try {
      const supported = await Linking.canOpenURL(upiURL);

      if (supported) {
        await Linking.openURL(upiURL);
      } else {
        Alert.alert('Error', 'UPI app not installed on your device');
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to initiate UPI payment');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.doctorInfo}>
          <Image source={require('../assets/images/doctorprofile.jpg')} style={styles.profileImage} />
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>Dr. Brijesh</Text>
            <Text style={styles.doctorSpeciality}>MBBS, DNB General Surgery</Text>
            <Text style={styles.doctorSpeciality}>M.Ch - Cosmetic/Plastic Surgeon</Text>
            <Text style={styles.doctorClinic}>PLASTICOS, Lucknow</Text>
            <Text style={styles.doctorExperience}>15 yrs exp • ₹ 500</Text>
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.formLabel}>Enter Patient Details</Text>
          <View style={[styles.formField, { backgroundColor: Colors.blueLight, marginBottom: 15 }]}>
            <Text style={[styles.fieldLabel, { textAlign: 'center', marginTop: 5 }]}>Appointment Date/Time</Text>
            <View style={styles.fieldValue}>
              <Text>Thursday, Jul 4, 2024 at 3:00 PM</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Book an Appointment")}>
                <Text style={styles.changeText}>Change</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              value={mobile}
              keyboardType="phone-pad"
              onChangeText={(text) => setMobile(text)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Email Address (Optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Health Issue</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Issue"
              value={issue}
              onChangeText={(text) => setIssue(text)}
            />
          </View>
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Gender</Text>
            <View style={styles.genderSelection}>
              <TouchableOpacity
                style={[styles.genderOption, gender === 'Male' && styles.selectedGender]}
                onPress={() => setGender('Male')}
              >
                <Text>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.genderOption, gender === 'Female' && styles.selectedGender]}
                onPress={() => setGender('Female')}
              >
                <Text>Female</Text>
              </TouchableOpacity>
            </View>
          </View> 
        </View>
      </ScrollView>
      <TouchableOpacity onPress={payWithUPI} style={styles.bookButton}>
        <Text style={styles.bookButtonText}>BOOK APPOINTMENT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 80, 
  },
  doctorInfo: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  doctorDetails: {
    flex: 1,
    marginLeft: 20,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorSpeciality: {
    fontSize: 14,
    color: 'gray',
  },
  doctorClinic: {
    fontSize: 14,
    color: 'gray',
  },
  doctorExperience: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '500',
    marginTop: 5,
  },
  form: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formField: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  fieldLabel: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: '500',
  },
  fieldValue: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  changeText: {
    color: Colors.secondary,
    marginTop: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
    color: Colors.gray,
  },
  genderSelection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  genderOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  selectedGender: {
    borderColor: Colors.secondary,
    backgroundColor: Colors.blueLight,
  },
  bookButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.secondary,
    padding: 15,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BookingSummary;

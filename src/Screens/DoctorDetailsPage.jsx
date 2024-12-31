import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  ImageBackground
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../Constant';

const { width } = Dimensions.get('window');

const clinics = [
  {
    id: '1',
    name: 'Pristyn Care Clinic, Secundarabad, Hyderabad',
    address: 'Plot no87 Hno. 1-4, Entrenchment Rd, beside icici bank, East Marredpally',
    timings: 'Mon - Sun (10:00 - 13:00, 17:00 - 20:00)',
  },
  {
    id: '2',
    name: 'Pristyn Care Clinic, Hi-tech city, Hyderabad',
    address: 'Flat #501, Moon Rock Residency, Botanical Garden Rd, opposite Chirec',
  },
  {
    id: '3',
    name: 'Pristyn Care Clinic, Kukatpally, Hyderabad',
    address: '2nd Floor, Abhi Arcade KPHB Colony, JNTU Hitech City Road Near Forum Mall',
  },
  {
    id: '4',
    name: 'Pristyn Care Clinic, Madhapur, Hyderabad',
    address: 'First floor, Plot no 1213, Swamy Ayyappa Society, Mega Hills, Madhapur',
  },
];

const DoctorDetailsPage = () => {
    const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      {/* <ImageBackground source={Background}  > */}
      <View style={styles.header} >

        <Image
          style={styles.profileImage}
          source={require('../assets/images/doctorprofile.jpg')} // Replace with actual image URL or local path
        />
        <Text style={styles.doctorName}>Dr A N M Owais Danish</Text>
        <Text style={styles.doctorDetails}>MBBS, MS, MBBS, MS</Text>
        <Text style={styles.doctorDetails}>General Surgeon, Hyderabad</Text>
        <Text style={styles.doctorExperience}>10 yrs experience</Text>
        <Text style={styles.doctorRating}>92% (511 Ratings)</Text>
       
        </View>
        <View style={styles.section}>
         
         

        <Text style={styles.heading}>Book your consult:</Text>

      <View style={styles.optionContainer}>
        <Ionicons name="videocam" size={25}  color={Colors.primary} />
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>Video</Text>
          <Text style={styles.optionSubtitle}>Online Consultation</Text>
          <Text style={styles.fees}> ₹ 700 Fees</Text>

        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <Ionicons name="person" size={25} color={Colors.primary} />
        <View style={styles.optionText}>
          <Text style={styles.optionTitle}>In Person</Text>   
          <Text style={styles.optionSubtitle}>Consultation</Text>
          <Text style={styles.fees}> ₹ 1000 Fees</Text>

        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Book an Appointment")} style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.practiceHeading}>Hospital Locations :</Text>

      <View style={styles.locationContainer}>
        <Ionicons name='location' size={30} color={Colors.gray}/>
        <View>

        <Text style={styles.locationTitle}>SKY Medical Corporation</Text>
        <Text style={styles.locationDetails}>Anna Salai, Guindy Institutional Area, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032</Text>
        </View>

      </View>

      
      </View>

     
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
    backgroundColor:"#F9F8F1"

  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  doctorName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color:"black"
  },

  doctorDetails: {
    fontSize: 16,
    color:"black"
  },
  doctorExperience: {
    fontSize: 14,
    color:"black",
    marginTop: 5,
  },
  doctorRating: {
    fontSize: 14,
    color:"black",
    marginTop: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 15,
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  fees:{
    fontSize: 14,
    color: '#777',
    fontWeight:"500"
  },
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  practiceHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderTopWidth:1,
    borderTopColor:Colors.borderDarl,
    paddingTop:20
  },
  locationContainer: {
    marginBottom: 10,
    paddingHorizontal:20,
    flexDirection:"row",
    gap:10,
    paddingTop:20
  },
  locationTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  locationDetails: {
    fontSize: 14,
    color: '#777',
  },
  section:{
    padding:10
  }
  
});

export default DoctorDetailsPage;

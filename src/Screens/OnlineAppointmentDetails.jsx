import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Call from 'react-native-vector-icons/Ionicons'; 
import Direction from 'react-native-vector-icons/Entypo';
import { Colors } from '../Constant';

const OnlineAppointmentDetails = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
         <View style={styles.card}>
        <View style={styles.resolvedContainer}>
            
          <Text style={styles.resolvedText}> <Icon name='checkcircleo' color="green" size={18} />  Your Appointment has been confirmed</Text>
          <Text style={styles.resolvedSubText}>
            Your Appointmnt with Doctor name was confirmed. You may visit the Manipal Hospitals as per your health needs.
          </Text>
        </View>
        <View style={styles.appointmentDetails}>
          <Text style={styles.appointmentDate}>Jul 06, 2024</Text>
          <Text style={styles.bookedFor}>Booked for - VIJAYA RAJ M</Text>
          <Text style={styles.hospitalName}>Manipal Hospitals</Text>
          <Text style={styles.hospitalAddress}>
            26/4, Brigade Gateway, Malleshwaram West, Yeshwanthpur, Bangalore, Karnataka 560055
          </Text>
          <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <TouchableOpacity style={[styles.detailsButton]} onPress={() => navigation.navigate('AppointmentDetails', { appointmentId: item.id })}>
       <View style={{flexDirection:"row"}}>
       <Call name='call' color={Colors.secondary} size={18} />
       <Text style={[styles.detailsButtonText,{color:Colors.secondary}]}>  Call Hospital</Text>
       </View>
       
      </TouchableOpacity>

      
     
      </View>
        </View>
        {/* <View style={styles.noteContainer}>
          <Text style={styles.noteTitle}>Important Note</Text>
          <Text style={styles.noteText}>
            "New Patient registration fees – INR 250/-.
            Please carry a valid Government ID proof to the hospital registration desk.
            For hassle free experience, please click on the link https://tinyurl.com/y42mo87m,"
          </Text>
        </View> */}
      </View>
      
      <View style={styles.card}>
    
        <Text style={styles.helpText}>Need Help?</Text>
        <Text style={styles.subHelpText}>In case of any issues, talk to our customer support.</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Chat Support')} style={styles.chatSupport}>
          <Icon name="message1" size={24} color={Colors.secondary} />
          <Text style={styles.chatSupportText}>Live Chat Support</Text>
        </TouchableOpacity>

        <Text style={styles.helpText}>Meeting Link</Text>
        <Text style={styles.subHelpText}>Click the link and join to the consulting on time</Text>
        <View style={styles.chatSupport}>
          <Icon name="link" size={24} color={Colors.secondary} />
          <Text style={styles.chatSupportText}>https://meet.google.com/vxz-btay-sxc</Text>
        </View>

        <View style={styles.bookingDetails}>
          <Text style={styles.sectionTitle}>Booking Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Patient</Text>
            
              <Text style={styles.detailValue}>VIJAYA RAJ M</Text>
             
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Mobile No</Text>
            <Text style={styles.detailValue}>+916384084510</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Health Issue</Text>
            <Text style={styles.detailValue}>Stomach Pain</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Gender</Text>
            <Text style={styles.detailValue}>Male</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Appointment ID</Text>
            <Text style={styles.detailValue}>19541831</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Appointment Fees</Text>
            <Text style={styles.detailValue}>₹850</Text>
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
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
    padding: 15,
  },
  noteContainer: {
    backgroundColor: '#FFF3E0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.warning,
  },
  noteText: {
    fontSize: 14,
    color: Colors.text,
    marginTop: 5,
  },
  helpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 10,
  },
  subHelpText: {
    fontSize: 14,
    color: Colors.text,
    marginBottom: 20,
  },
  chatSupport: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  chatSupportText: {
    fontSize: 16,
    color: Colors.primary,
    marginLeft: 10,
  },
  bookingDetails: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
    marginBottom: 15,
  },
  detailRow: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth:1,
    borderBottomColor:Colors.borderColor,
    paddingVertical:15,
    paddingLeft:10
  },
  detailLabel: {
    fontSize: 16,
    color: Colors.gray,
    fontWeight:"500"
  },
  detailValueContainer: {
    alignItems: 'flex-end',
  },
  detailValue: {
    fontSize: 15,
    color: Colors.text,
    fontWeight: 'bold',
    marginTop:5
  },
  detailPhone: {
    fontSize: 14,
    color: Colors.text,
  },
  addPhotoButton: {
    marginTop: 5,
  },
  addPhotoText: {
    fontSize: 14,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  resolvedContainer: {
    backgroundColor: Colors.successColor,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    marginTop:10
  },
  resolvedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.success,
  },
  resolvedSubText: {
    fontSize: 14,
    color: Colors.text,
    marginTop: 5,
  },
  appointmentDetails: {
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
    paddingTop: 15,
    marginBottom: 20,
  },
  appointmentDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 5,
  },
  bookedFor: {
    fontSize: 14,
    color: Colors.text,
    marginBottom: 5,
  },
  hospitalName: {
    fontSize: 14,
    color: Colors.secondary,
    marginBottom: 5,
    fontWeight:"500"
  },
  hospitalAddress: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 20,
    marginTop:10
  },
  bookAgainButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookAgainText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsButton: {
    width:"45%",
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth:2,
        borderColor:Colors.secondary,backgroundColor:"white"
  },
  detailsButtonText: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnlineAppointmentDetails;

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Colors } from '../../Constant';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Location from 'react-native-vector-icons/FontAwesome'


const appointments = [
  {
    id: '1',
    doctor: 'Dr. Brijesh',
    specialization: 'PLASTICOS',
    address: '474A/170 Bramh Nagar 2nd Daliganj Railway Crossing, Sitapur Rd, Lucknow, U.P.',
    date: 'Jul 6, 2024',
    time: '10:00 AM',
    status: 'Confirmed',
    paid:'1000',
    imageUrl: require('../../assets/images/doctorprofile.jpg'), // Replace with actual image URL
  },
  {
    id: '2',
    doctor: 'Dr. Brijesh',
    specialization: 'PLASTICOS',
    address: '474A/170 Bramh Nagar 2nd Daliganj Railway Crossing, Sitapur Rd, Lucknow, U.P.',
    date: 'Jul 4, 2024',
    time: '3:00 PM',
    status: 'Pending',
    paid:'750',
    imageUrl: require('../../assets/images/doctorprofile.jpg'), 
  },
];

const AppointmentCard = ({ appointment }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.appointmentFor}>Appointment for <Text style={styles.boldText}>Self</Text></Text>
      <Text style={appointment.status === 'Confirmed'? styles.status: styles.statusPending}>{appointment.status}</Text>
    </View>
    <View style={styles.cardBody}>
      <Image source={appointment.imageUrl} style={styles.doctorImage} />
      <View style={styles.details}>
        <Text style={styles.doctorName}>{appointment.doctor}</Text>
        <Text style={styles.specialization}>{appointment.specialization}</Text>
        <Text style={styles.address}>{appointment.address}</Text>
        <Text style={styles.boldText}>₹ {appointment.paid}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{appointment.time}</Text>
        <Text style={styles.date}>{appointment.date}</Text>
      </View>
    </View>
    <View style={styles.cardFooter}>
      <TouchableOpacity style={styles.button}>
        <Icon name='call' size={20} /> 
        <Text style={styles.buttonText}>Call Hospital</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Location name='location-arrow' size={20} /> 
        <Text style={styles.buttonText}> Direction</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const Upcoming = () => (
  <View style={styles.container}>

    <FlatList
      data={appointments}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <AppointmentCard appointment={item} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  tab: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
    color: '#888',
  },
  activeTab: {
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#ff0000',
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth:1,
    paddingBottom:6,
    borderBottomColor:Colors.borderDarl

  },
  appointmentFor: {
    fontSize: 16,
    color: '#000',
  },
  boldText: {
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#fff',
    backgroundColor: '#28a745',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusPending: {
    fontSize: 14,
    color: '#000',
    backgroundColor: Colors.Yellow,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cardBody: {
    flexDirection: 'row',
    marginTop: 10,
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialization: {
    fontSize: 14,
    color: '#666',
  },
  address: {
    fontSize: 12,
    color: '#666',
    marginBottom:5
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    marginTop: 10,   
    paddingVertical:5  
 },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection:"row",
    gap:3
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
    fontWeight:"500"
  },
});

export default Upcoming;

// src/Screens/AppointmentScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Colors } from '../Constant';
import Dot from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';

const doctorProfile = require('../assets/images/doctorprofile.jpg'); // Replace with your local image

const timeslots = {
  morning: [
    { time: '11:00 AM', status: 'available' },
    { time: '11:10 AM', status: 'booked' },
    { time: '11:30 AM', status: 'available' },
    { time: '11:40 AM', status: 'booked' },
    { time: '11:50 AM', status: 'available' }
  ],
  afternoon: [
    { time: '12:00 PM', status: 'booked' },
    { time: '12:10 PM', status: 'available' },
    { time: '12:30 PM', status: 'booked' },
    { time: '12:40 PM', status: 'available' },
    { time: '12:50 PM', status: 'booked' },
    { time: '01:00 PM', status: 'available' },
    { time: '01:20 PM', status: 'available' }
  ],
  evening: [
    { time: '06:00 PM', status: 'available' },
    { time: '06:10 PM', status: 'booked' },
    { time: '06:30 PM', status: 'booked' },
    { time: '06:40 PM', status: 'available' },
    { time: '06:50 PM', status: 'booked' },
    { time: '07:10 PM', status: 'available' },
    { time: '07:20 PM', status: 'booked' },
    { time: '07:30 PM', status: 'available' },
    { time: '07:50 PM', status: 'booked' }
  ],
};

const BookingAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigation = useNavigation();

  const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format

  const renderSlot = (slot, index) => {
    const isBooked = slot.status === 'booked';
    const isAvailable = slot.status === 'available';

    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.slot,
          isBooked && styles.bookedSlot,
        ]}
        disabled={isBooked}
        onPress={() => isAvailable && navigation.navigate("Booking Sammary")}
      >
        <Text
          style={[
            styles.slotText,
            isBooked && styles.bookedSlotText,
          
          ]}
        >
          {slot.time}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={doctorProfile} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.doctorName}>Dr. Durgaprasad Marathe</Text>
          <Text style={styles.doctorDetails}>MBBS, MS, MBBS, MS</Text>
          <Text style={styles.doctorDetails}>General Surgeon, Hyderabad</Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={[styles.doctorDetails, { fontWeight: "500" }]}>10 yrs exp</Text>
            <Dot name='dot-single' size={23} color={Colors.gray} />
            <Text style={styles.optionSubtitle}>₹ 700 Fees</Text>
          </View>
        </View>
      </View>
      <View style={{borderBottomWidth:1,borderBlockColor:Colors.borderColor,paddingBottom:15}}>

      
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: Colors.secondary ,}
        }}
        minDate={today} 
        style={styles.calendar}
      />
      </View>
      {selectedDate && (
        <View style={styles.slotsContainer}>
          <View style={styles.slotindegatercontainer} >
            <View style={styles.slotsIndecator}>
              <Dot name='dot-single' size={40} color="#6398B5"/>
              <Text style={styles.slotstatusText}> Available Slots
              </Text>
            </View>
            <View style={styles.slotsIndecator}>
              <Dot name='dot-single' size={40} color={Colors.borderDarl}/>
              <Text style={styles.slotstatusText}>
               Booked Slots
              </Text>
            </View>
          </View>
          <Text style={styles.sectionTitle}>
            <Image style={{ width: 40, height: 40 }} source={require("../assets/images/sunrise.png")} /> Morning
          </Text>
          <View style={styles.slots}>
            {timeslots.morning.map(renderSlot)}
          </View>
          <Text style={styles.sectionTitle}>
            <Image style={{ width: 30, height: 30 }} source={require("../assets/images/sun.png")} /> Afternoon
          </Text>
          <View style={styles.slots}>
            {timeslots.afternoon.map(renderSlot)}
          </View>
          <Text style={styles.sectionTitle}>
            <Image style={{ width: 40, height: 40 }} source={require("../assets/images/sunset.png")} /> Evening
          </Text>
          <View style={styles.slots}>
            {timeslots.evening.map(renderSlot)}
          </View>
        </View>
      )}
      {!selectedDate && (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image style={{ width: 200, height: 200, alignSelf: "center", marginTop: 50 }} source={require("../assets/images/calenderchoose.png")} />
          <Text style={{ color: Colors.gray, marginTop: 10 }}>
            Please select a date above the calendar
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: Colors.blueLight,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  profileDetails: {
    marginLeft: 20,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  speciality: {
    fontSize: 14,
    color: 'gray',
  },
  viewProfile: {
    color: 'blue',
    marginTop: 5,
  },
  calendar: {
    paddingTop: 10,
    backgroundColor: Colors.blueLight,
  },
  slotsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  slots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 50,
  },
  slot: {
    backgroundColor: "#6398B5",
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  slotText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  bookedSlot: {
    backgroundColor: Colors.borderDarl,
  },
  
  bookedSlotText: {
    color: Colors.gray,
  },
  
  doctorDetails: {
    fontSize: 13,
    color: "gray",
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 3,
    fontWeight: "500",
  },
  slotindegatercontainer:{
flexDirection:"row",
justifyContent:"space-around",
backgroundColor:Colors.blueLight
  },
  slotsIndecator:{
flexDirection:"row",
justifyContent:"center",
alignItems:"center"
  },
  slotstatusText:{
    fontSize:15,
    fontWeight:"500",
    color:Colors.gray
  }
});

export default BookingAppointment;

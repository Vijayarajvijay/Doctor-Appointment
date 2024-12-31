import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Call from 'react-native-vector-icons/Ionicons';

import { Colors } from '../Constant';

const OnlineAppointment = ({ navigation }) => {
  const appointments = [
    {
      id: '1',
      status: 'Pending',
      date: 'Jul 06, 4:30 PM',
      doctor: 'Dr. Tejas Suresh Rao',
      specialty: 'General Physician',
      hospital: 'Manipal Hospitals, Yeshwanthpur',
      bookedFor: 'VIJAYA RAJ M',
      image: require('../assets/images/doctorprofile.jpg')
    },
    {
      id: '2',
      status: 'Success',
      date: 'Jul 06, 4:30 PM',
      doctor: 'Dr. Tejas Suresh Rao',
      specialty: 'General Physician',
      hospital: 'Manipal Hospitals, Yeshwanthpur',
      bookedFor: 'VIJAYA RAJ M',
      image: require('../assets/images/doctorprofile.jpg')
    },
    {
      id: '3',
      status: 'Success',
      date: 'Jul 06, 4:30 PM',
      doctor: 'Dr. Tejas Suresh Rao',
      specialty: 'General Physician',
      hospital: 'Manipal Hospitals, Yeshwanthpur',
      bookedFor: 'VIJAYA RAJ M',
      image: require('../assets/images/doctorprofile.jpg')
    },
  ];

  const getStatusBackgroundColor = (status) => {
    switch (status) {
      case 'Success':
        return styles.statusContainerSuccess;
      case 'Pending':
        return styles.statusContainerPending;
      default:
        return styles.statusContainerDefault;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={[styles.statusContainer, getStatusBackgroundColor(item.status)]}>
        <Text style={styles.statusText}> Confirmation {item.status}</Text>
        <Icon name="exclamationcircleo" size={20} color={Colors.black} />
      </View>
      <View style={{padding:15}}>
      <Text style={styles.dateText}>{item.date}</Text>
      <View style={styles.detailsContainer}>
        <Image source={item.image} style={styles.doctorImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>{item.specialty}</Text>
          <Text style={styles.doctorText}>{item.doctor}</Text>
          <Text style={styles.hospitalText}>{item.hospital}</Text>
          <Text style={styles.bookedForText}>Booked for {item.bookedFor}</Text>
        </View>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
      <TouchableOpacity style={[styles.detailsButton,{ borderWidth:2,
    borderColor:Colors.secondary,backgroundColor:"white"}]} onPress={() => navigation.navigate('AppointmentDetails', { appointmentId: item.id })}>
       <View style={{flexDirection:"row"}}>
       <Call name='call' color={Colors.secondary} size={18} />
       <Text style={[styles.detailsButtonText,{color:Colors.secondary}]}>  Call Hospital</Text>
       </View>
       
      </TouchableOpacity>

      <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('Online Details', { appointmentId: item.id })}>
        <Text style={styles.detailsButtonText}>View Details</Text>
      </TouchableOpacity>
      </View>
      
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.tabContainer}>
        <Text style={styles.tabTextActive}> {appointments.length} Appointments</Text>
      </View>
      {appointments.length === 0 &&
        (<View style={{justifyContent:"center",alignItems:"center",flex:1,marginTop:50}}>
        <Image style={{width:350,height:250}} source={require('../assets/images/norecords.png')}/>
        <Text style={styles.tabTextActive}>
          No records found for the appointment
        </Text>
        <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('Online Details', { appointmentId: item.id })}>
        <Text style={styles.detailsButtonText}>Book Now</Text>
      </TouchableOpacity>
      </View> )
      }
     
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  editText: {
    color: Colors.black,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    backgroundColor:"#F6F5F4"
  },
  tabTextActive: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray,
  },
  tabText: {
    padding: 10,
    fontSize: 16,
    color: Colors.text,
  },
  card: {
    margin: 15,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: 10,
    backgroundColor: Colors.borderColor,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  statusContainerSuccess: {
    backgroundColor: Colors.successColor, 
  },
  statusContainerPending: {
    backgroundColor: '#FADCD3', 
  },
  statusContainerDefault: {
    backgroundColor: '#E8E8E8',
  },
  statusText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.warning,
  },
  dateText: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 10,
    fontWeight:"500"
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft:10
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  doctorText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight:"500",
    marginVertical:5
  },
  hospitalText: {
    fontSize: 14,
    color: Colors.gray,
  },
  bookedForText: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 10,
    fontWeight:"500"
  },
  detailsButton: {
    width:"45%",
    marginTop: 10,
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnlineAppointment;

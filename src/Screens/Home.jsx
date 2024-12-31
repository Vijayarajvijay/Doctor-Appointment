import React, { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from "react-native";
import { Colors } from "../Constant";
import { useNavigation } from "@react-navigation/native";
// import Carousel from 'react-native-snap-carousel';

const { width } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    title: "STEP 1/4",
    description: "Select a type of consultation ( Online or Direct )",
    image: require("../assets/images/chooseDoctor.jpg"), // Add your local image here
  },
  {
    id: "2",
    title: "STEP 2/4",
    description: "Select consultation date and time slot for per convenience",
    image: require("../assets/images/chooseDate.jpg"), // Add your local image here
  },
  {
    id: "3",
    title: "STEP 3/4",
    description:
      "Pay  consultation fee to confirm the appointment and treatment",
    image: require("../assets/images/payMoney.jpg"), // Add your local image here
  },
  {
    id: "4",
    title: "STEP 4/4",
    description: "Download the prescription after the consultation is complete",
    image: require("../assets/images/priscription.jpg"), // Add your local image here
  },
  // Add more items if needed
];

const Home = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
    <ScrollView >
        {/* <StatusBar /> */}
      {/* <View style={{padding:20,}}>
      </View> */}
      <View style={styles.FindContainer}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.greeting}>Hello, Vijayaraj</Text>

          <Text style={styles.heading}>Find Your Doctor</Text>
          <Text style={styles.subHeading}>
            Book an appointment for consultation in just a few clicks
          </Text>
        </View>
        <Image
          style={{ width: 100, height: 100, marginTop: 45 }}
          source={require("../assets/images/doctorlogo1.png")}
        />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.sectionTitle}>
          How to book a video consultation?
        </Text>
        <Text style={styles.sectionDescription}>
          Learn how to do with easy steps
        </Text>

      
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
        />
      </View>

      <View style={styles.healthIssuescontainer}>
        <Text style={styles.sectionTitle}>
            Most Common Health Issues 
        </Text>
        <View style={styles.healthIssueinside}>
            <View style={styles.imgAndText}>
                <Image style={styles.IssuesImg} source={require("../assets/images/stomach-pain.png")}/>
                <Text style={styles.issuheading}>
                   Stomach Pain
                </Text>
            </View>

            <View  style={styles.imgAndText}>
                <Image style={styles.IssuesImg} source={require("../assets/images/headache1.jpg")}/>
                <Text style={styles.issuheading}>
                    Headache
                </Text>
            </View>

            <View  style={styles.imgAndText}>
                <Image style={styles.IssuesImg} source={require("../assets/images/cold.jpg")}/>
                <Text style={styles.issuheading}>
                Cold and Cough
                </Text>
            </View>

            <View  style={styles.imgAndText}>
                <Image style={styles.IssuesImg} source={require("../assets/images/fever.jpg")}/>
                <Text style={styles.issuheading}>
                   Fever
                </Text>
            </View>


        </View>

        <View style={styles.healthIssueinside}>
            <View  style={styles.imgAndText}>
                <Image style={styles.IssuesImg} source={require("../assets/images/vertigo.png")}/>
                <Text style={styles.issuheading}>
                   Vertigo
                </Text>
            </View>

            <View  style={styles.imgAndText}>
                <Image style={styles.IssuesImg} source={require("../assets/images/back-pain.jpg")}/>
                <Text style={styles.issuheading}>
                    Back Pain
                </Text>
            </View>

            <View  style={styles.imgAndText}>
                <Image style={styles.IssuesImg} source={require("../assets/images/infection2.png")}/>
                <Text style={styles.issuheading}>
                  Fungal Infection
                </Text>
            </View>

            <View  style={styles.imgAndText}>
                <Image style={styles.IssuesImg} source={require("../assets/images/diabetes2.png")}/>
                <Text style={styles.issuheading}>
                Diabetes
                </Text>
            </View>


        </View>
      </View>

      <View style={styles.sevicesContainer}>
      <Text style={styles.sectionTitle}>
            Our Services
        </Text>
        <View style={{flexDirection:"row"}}>
     
            <TouchableOpacity onPress={()=>navigation.navigate('Bookings')} style={styles.card2}>
              <Image source={require("../assets/images/videocalldoctor.jpg")} style={styles.image2} />
              <View style={{paddingHorizontal:10}}>
              <Text style={styles.title1}>Online Consultation  </Text>
              <Text style={styles.description1}>Connet with your doctor</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('DoctorsList')} style={styles.card2}>
              <Image source={require("../assets/images/inpersonDoctor.jpg")} style={styles.image2} />
              <View style={{paddingHorizontal:10}}>
              <Text style={styles.title1}>Book Direct Appointment </Text>
              <Text style={styles.description1}>Confirmed Appointments</Text>
              </View>
            </TouchableOpacity>
            </View>
      </View>    

      
    </ScrollView>
    <TouchableOpacity onPress={()=>navigation.navigate('Doctor Details')} style={styles.bookButton}>
    <Text style={styles.bookingText}>Book now</Text>
  </TouchableOpacity>
   
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
  },
  subHeading: {
    fontSize: 13,
    marginTop: 5,
    width: 200,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  sectionDescription: {
    fontSize: 16,
    marginTop: 5,
  },

  navigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  navItem: {
    fontSize: 16,
  },
  card: {
    width: width * 0.6,
    marginRight: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    height: 250,
    borderWidth: 1,
    borderColor: "#A6C0CE",
    marginTop: 20,
  },
  card2: {
    width: width * 0.4,
    marginRight: 20,
    // padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    // height: 20,
    borderWidth: 1,
    borderColor: "#A6C0CE",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
    marginBottom: 10,
  },
  image2: {
    width: "100%",
    height: 140,
    // resizeMode: "contain",
    marginBottom: 10,
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title1:{
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: "#666",
  },
  description1: {
    fontSize: 12,
    color: "#666",
    marginBottom:15
  },
  FindContainer: {
    marginTop: 30,
    flexDirection: "row",
    gap: 20,
    backgroundColor: Colors.blueLight,
    width: "100%",
    height: 160,
  },
  bookButton: {
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems:"center",
    alignSelf:"center",
    // margin: 30,
    width:"80%",
    height: 50,
    marginBottom:10,
    borderRadius: 10,
   
  },
  bookingText: {
    color: Colors.white,
    textAlign: "center",
    fontWeight:"900"
  },
  healthIssuescontainer:{
    padding:20
  },
  IssuesImg:{
    width:60,
    height:60,
    borderRadius:100,
    
  },
  issuheading:{
    fontSize: 11,
    marginTop:5,
    textAlign:"center",
    color: "#666"   ,
    fontWeight:"500" 
  },
  healthIssueinside:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:15
  },
  imgAndText:{justifyContent:"center",alignItems:"center"},
  sevicesContainer:{
paddingHorizontal:20,
marginBottom:20

  }
});

export default Home;

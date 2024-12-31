// AccountDetails.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../Constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const MyProfile = () => {
    const navigation = useNavigation()
  const userInfo = {
    name: 'vijayaraj m',
    phone: '6384084510',
    email: 'vr104555@gmail.com',
    age: '06/07/2024',
    gender: 'Male',
    location: 'Chennai, India',
    pinCode: '600028',
  };

  return (
    <ScrollView style={styles.container}>
        
      <View style={styles.profile}>
        <Icon name="person-circle-outline" size={80} color={Colors.secondary}/>
        <Text style={styles.name}>{userInfo.name}</Text>
      </View>
      <View style={styles.details}>
        <DetailItem icon="call-sharp" text={userInfo.phone} subtext="Phone" />
        <DetailItem icon="mail-sharp" text={userInfo.email} subtext="Email-Id" />
        <DetailItem icon="calendar-sharp" text={userInfo.age} subtext="Date Of Birth" />
        <DetailItem icon="male-sharp" text={userInfo.gender} subtext="Gender" />
        <DetailItem icon="location-sharp" text={userInfo.location} subtext={`Pin Code: ${userInfo.pinCode}`} />
      </View>

      <TouchableOpacity style={styles.EditButton} onPress={()=>navigation.navigate("Edit Profile")}>
<MaterialCommunityIcons name='account-edit' size={26} color={Colors.white}/>   
<Text style={{color:Colors.white,fontWeight:"500"}}>
    Edit Profile
</Text>

    </TouchableOpacity>

    <View style={styles.medLogoContainer}>
            <Image
              style={styles.medLogo}
              source={require("../assets/images/Group 187.png")}
            />
            <Text style={styles.appName}>Health Visit</Text>
          </View>
    </ScrollView>
  );
};

const DetailItem = ({ icon, text, subtext }) => (
  <View style={styles.detailItem}>
    <Icon name={icon} size={24} color={Colors.secondary}style={styles.detailIcon} />
    <View>
      <Text style={styles.detailText}>{text}</Text>
      <Text style={styles.detailSubtext}>{subtext}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007bff',
    padding: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  profile: {
    alignItems: 'center',
    marginVertical: 20,
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
  details: {
    marginHorizontal: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  detailIcon: {
    marginRight: 20,
  },
  detailText: {
    fontSize: 16,
  },
  detailSubtext: {
    color: '#aaa',
  },
  EditButton:{
    flexDirection:"row",
  width:"40%",
  height:40,
  backgroundColor:Colors.secondary,
  justifyContent:"center",
  alignSelf:"center",
  alignItems:"center",
  marginTop:20,
  gap:5,
  borderRadius:10
  },
  medLogoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginTop:100
  },
  medLogo: {
    width: "15%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  appName: {
    color: Colors.secondary,
    fontSize:20,
    fontWeight: "900",
    alignItems: "center",
    marginTop: 15,
  },
});

export default MyProfile;

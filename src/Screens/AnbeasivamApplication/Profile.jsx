import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { Colors } from "../../Constant";
import Icons from "react-native-vector-icons/MaterialIcons";
import Edit from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "Nayeem Bhuiyan",
    email: "nayeem**@gmail.com",
    phone: "01225483021",
    address: "Dhaka, Bangladesh",
  });

  const [profileImage, setProfileImage] = useState(require("../../assets/images/doctorprofile.jpg"));

  const handleEdit = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value });
  };

  const selectImage = async () => {
    // Request permission to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage({ uri: result.uri });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.profileImageContainer} onPress={selectImage}>
        <Image source={profileImage} style={styles.profileImage} />
        <View style={styles.cameraIconContainer}>
          <Text style={styles.cameraIcon}>
            <Edit name="image-edit-outline" size={25} />
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={userDetails.name}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={userDetails.email}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={userDetails.phone}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={userDetails.address}
          editable={false}
        />
      </View>
      <TouchableOpacity
        style={styles.changePasswordContainer}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.changePasswordText}>Edit Profile</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <ScrollView>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  value={userDetails.name}
                  onChangeText={(text) => handleEdit("name", text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={userDetails.email}
                  onChangeText={(text) => handleEdit("email", text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  value={userDetails.phone}
                  onChangeText={(text) => handleEdit("phone", text)}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  value={userDetails.address}
                  onChangeText={(text) => handleEdit("address", text)}
                />
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
  profileImageContainer: {
    alignSelf: "center",
    marginBottom: 20,
    position: "relative",
    marginTop:30
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#0196A3",
    borderRadius: 15,
    padding: 5,
  },
  cameraIcon: {
    color: Colors.white,
    fontSize: 18,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    color: Colors.black,
    marginBottom: 5,
    fontWeight: "500",
    marginLeft: 5,
  },
  input: {
    backgroundColor: "#F7F6F3",
    padding: 10,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    color: Colors.gray,
    marginVertical: 2,
    borderRadius: 10,
    elevation: 1,
    
  },
  changePasswordContainer: {
    gap: 180,
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor:"#0196A3",
    marginVertical: 15,
  },
  changePasswordText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 15,
  },
  saveButton: {
    backgroundColor: "#0196A3",
    marginTop: 50,
    borderRadius: 5,
    padding: 15,
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Profile;

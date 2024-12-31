import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome, MaterialIcons } from "react-native-vector-icons";
import { Colors } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const ProfileEdit = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState("");
  const [dateSelected, setDateSelected] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    pinCode: "",
    age: "",
  });

  const navigation = useNavigation()

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDateSelected(true);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/Editprofile.jpg')}
      />
      <View style={styles.inputContainer}>
        <View style={styles.column}>
          <TextInput
            style={styles.input}
            placeholder="User Name"
            placeholderTextColor="#555"
            value={formData.name}
            onChangeText={(text) => handleInputChange("firstName", text)}
          />
        </View>
        <View style={styles.column}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#555"
            value={formData.phoneNumber}
            onChangeText={(text) => handleInputChange("lastName", text)}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email Id"
          placeholderTextColor="#555"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#555"
          value={formData.address}
          onChangeText={(text) => handleInputChange("city", text)}
        />
        <View style={styles.row}>
          <View
            style={[
              styles.column,
              {
                borderWidth: 1,
                borderColor: Colors.secondary,
                borderRadius: 5,
                 
                marginVertical: 10,
                fontSize: 16,
                height: 43,
              },
            ]}
          >
            <Picker
              selectedValue={gender}
              style={styles.picker}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item label="Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
          <View style={styles.column}>
            <Pressable onPress={() => setShow(true)} style={styles.datePicker}>
              <Text style={styles.dateText}>
                {dateSelected ? date.toLocaleDateString() : "Date of Birth"}
              </Text>
              {show && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChangeDate}
                />
              )}
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("My Profile")} style={styles.saveButton}>
        <MaterialIcons name="save" size={20} color="#fff" />
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 0.48,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    color: "#000",
  },
  picker: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 5,
    // marginBottom: 5,
    marginTop:-5
  },
  datePicker: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  dateText: {
    fontSize: 16,
    color: "#555",
  },
  saveButton: {
    flexDirection: "row",
    backgroundColor: Colors.secondary,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default ProfileEdit;

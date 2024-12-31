import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { Colors } from '../Constant';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import { Zocial, FontAwesome, FontAwesome6, Ionicons } from 'react-native-vector-icons';
import PasIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUpScreen = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('Male');

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDateSelected(true);
  };

  const handleOpen = () => {
    setShow(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.LogoContainer}>
        <Image
          style={{ width: 390, height: 230, marginTop: 20 }}
          source={require('../assets/images/signup22222.png')}
        />
      </View>

      <View style={styles.logtex}>
        <Text style={styles.logtexin}>Create an account </Text>
        <Text style={styles.subtext}> Start Your Health Journey </Text>
      </View>

      <View style={styles.InputContainer}>
        <View style={styles.particularInput}>
          <View style={styles.emailInp}>
            <FontAwesome style={styles.icons} name="user" size={30} />
            <TextInput
              onChangeText={setUserName}
              value={userName}
              style={styles.input}
              placeholder="User Name"
              placeholderTextColor="#aaa"
            />
          </View>
        </View>

        <View style={styles.particularInput}>
          <View style={styles.emailInp}>
            <Zocial style={styles.icons} name="email" size={25} />
            <TextInput
              onChangeText={setEmail}
              value={email}
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#aaa"
            />
          </View>
        </View>

        <View style={styles.particularInput}>
          <View style={styles.emailInp}>
            <FontAwesome style={styles.icons} name="phone" size={30} />
            <TextInput
              onChangeText={setEmail}
              value={email}
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#aaa"
            />
          </View>
        </View>

        <View style={styles.particularInput}>
          <Pressable onPress={handleOpen} style={styles.emailInp}>
            <FontAwesome6 style={styles.icons} name="calendar-days" size={25} />
            <Text style={[styles.input, { color: Colors.gray, marginTop: 5 }]}>
              {dateSelected ? date.toLocaleDateString() : 'DD/MM/YYY'}
            </Text>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            )}
          </Pressable>
        </View>

        <View style={styles.particularInput}>
          <View style={styles.emailInp}>
            {gender =="Male"? <Ionicons style={styles.icons} name="male-sharp" size={25} />:<Ionicons style={styles.icons} name="female-sharp" size={25} />}
            <View style={{width:"100%"}}>
            <RNPickerSelect
              onValueChange={(value) => setGender(value)}
              items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
              ]}
              placeholder={{
                label: 'Select Gender',
                value: null,
                color: '#aaa',
              }}
              style={pickerSelectStyles}
              value={gender}
            >
<Text style={[styles.input, { color: Colors.gray, marginTop: 5 }]}>
              {gender}
            </Text>
            </RNPickerSelect>
            </View>
          </View>
        </View>

        <View style={styles.particularInput}>
          <View style={styles.emailInp}>
            <FontAwesome6 style={styles.icons} name="map-location-dot" size={25} />
            <TextInput
              onChangeText={setAddress}
              value={address}
              style={styles.input}
              placeholder="Address"
              placeholderTextColor="#aaa"
            />
          </View>
        </View>

        <View style={styles.particularInput}>
          <View style={styles.emailInp}>
            <PasIcon color={Colors.secondary} name="lock" size={25} />
            <TextInput
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              value={password}
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
            />
            <PasIcon
              name={showPassword ? 'eye' : 'eye-with-line'}
              size={18}
              style={{ marginTop: 7 }}
              onPress={toggleShowPassword}
            />
          </View>
        </View>

        <View style={styles.particularInput}>
          <View style={styles.emailInp}>
            <PasIcon color={Colors.secondary} name="lock" size={25} />
            <TextInput
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
            />
            <PasIcon
              name={showConfirmPassword ? 'eye' : 'eye-with-line'}
              size={18}
              style={{ marginTop: 7 }}
              onPress={toggleShowConfirmPassword}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={styles.logbutton} onPress={() => navigation.navigate('Bottom')}>
            <Text style={{ color: '#ffff', fontWeight: 'bold', fontSize: 18 }}> Signup </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ textAlign: 'center', marginTop: 20, color: Colors.gray }}>
            Already have an account ?
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                textAlign: 'center',
                marginTop: 15,
                color: Colors.secondary,
                fontWeight: '500',
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>

        <View style={styles.medLogoContainer}>
          <Image
            style={styles.medLogo}
            source={require('../assets/images/Group 187.png')}
          />
          <Text style={styles.appName}>Health Visit</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: 'gray',
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0,
    borderColor: 'purple',
    color: 'black',
    paddingRight: 30,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LogoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logtex: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logtexin: {
    fontSize: 30,
    fontWeight: '900',
    color: Colors.secondary,
  },
  subtext: {
    color: Colors.gray,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 5,
  },
  emailInp: {
    width: 'auto',
    height: 50,
    padding: 8,
    marginVertical: 8,
    backgroundColor: Colors.white,
    borderRadius: 15,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  logbutton: {
    backgroundColor: Colors.secondary,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 8,
  },
  input: {
    width: '80%',
  },
  icons: {
    color: Colors.secondary,
  },
  InputContainer: {
    padding: 20,
  },
  particularInput: {
    marginTop: 15,
  },
  medLogoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 30,
  },
  medLogo: {
    width: '15%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  appName: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: '900',
    alignItems: 'center',
    marginTop: 15,
  },
});

export default SignUpScreen;

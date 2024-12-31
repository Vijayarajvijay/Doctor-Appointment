import React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Pressable,
    ScrollView,
    TouchableOpacity
  } from "react-native";
import { Colors } from '../Constant'
import {Zocial,FontAwesome,FontAwesome6} from "react-native-vector-icons";
import PasIcon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';

const ResetPassword = () => {
    const [confirmPassword,setConfirmPassword] = useState('')
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

  
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };

  return (
    <ScrollView>
   <View style={styles.container}>
    <View style={styles.LogoContainer}>
<Image style={{width:"60%",height:250,}} source={require("../assets/images/resetPage.png")}/>
        </View>
   <View style={styles.logtex}>
            <Text style={styles.logtexin}>Create new Password</Text>
            <Text style={styles.subtext}>Your password must be different form previous used password  </Text>
          </View>
          <View style={styles.InputContainer}>
         

           
            <View style={styles.particularInput}>
              <View style={styles.emailInp}>
                <PasIcon color={Colors.secondary} name="lock" size={25} />
                <TextInput
                  onChange={setPassword}
                  secureTextEntry={!showPassword}
                  value={password}
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#aaa"
                />
                <PasIcon
                  name={showPassword ? "eye" : "eye-with-line"}
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
                  onChange={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  style={styles.input}
                  placeholder="Confirm Password"
                  placeholderTextColor="#aaa"
                />
                <PasIcon
                  name={showConfirmPassword ? "eye" : "eye-with-line"}
                  size={18}
                  style={{ marginTop: 7 }}
                  onPress={toggleShowConfirmPassword}
                />
              </View>
             
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity style={styles.logbutton} onPress={()=> navigation.navigate('Bottom')}>
                <Text
                  style={{ color: "#ffff", fontWeight: "bold", fontSize: 18 }}
                >
                  {" "}
                  Reset now
                </Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.medLogoContainer}>
            <Image
              style={styles.medLogo}
              source={require("../assets/images/Group 187.png")}
            />
            <Text style={styles.appName}>Health Visit</Text>
          </View>
          </View>
        
   </View>
   </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: "#fff",
      justifyContent:"flex-start",
      alignItems:"center"
    },
    LogoContainer:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
            },
            logtex: {
                justifyContent: "center",
                alignItems: "center",
                marginTop:20
              },
              logtexin: {
                fontSize: 30,
                fontWeight: "900",
                color: Colors.secondary,
              },
              emailInp: {
                width: "auto",
                height: 50,
                padding: 8,
                marginVertical: 8,
                backgroundColor: Colors.white,
                borderRadius: 15,
                elevation: 2,
                borderWidth:1,
                borderColor:Colors.borderColor,
                display: "flex",
                flexDirection: "row",
                gap: 10,
              },
              logbutton: {
                backgroundColor: Colors.secondary,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginTop: 8,
              },
              input: {
                width: "80%",
              },
              icons: {
                color: Colors.secondary,
              },
              subtext:{
                color:Colors.gray,
                fontWeight:"700",
                marginTop:10,
                textAlign:"center",
               width:300
              },
              medLogoContainer: {
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 10,
                marginTop:80
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
              InputContainer:{
                padding:20
              },
              particularInput:{
                marginTop:10
              },
})


export default ResetPassword

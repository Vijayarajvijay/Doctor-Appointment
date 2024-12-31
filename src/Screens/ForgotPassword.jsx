import React from 'react'
import { View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Pressable, ScrollView } from 'react-native'
import { Colors } from '../Constant'
import Icon from "react-native-vector-icons/Zocial";
import { useState } from "react";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");

  return (
    <ScrollView>
   <View style={styles.container}>

<View style={styles.LogoContainer}>
<Image style={{width:"80%",height:260,}} source={require("../assets/images/forgotPage.png")}/>
        </View>
        <View style={styles.logtex}>
            <Text style={styles.logtexin}>Forgot Password</Text>
            <Text style={styles.subtext}>Enter your email below to receive reset link  </Text>
          </View>
          <View >
          <View style={{marginTop:25}} >
              <View style={styles.emailInp}>
                <Icon style={styles.icons}  name="email" size={25} />
                <TextInput
                  onChange={setEmail}
                  value={email}
                  style={styles.input}
                  placeholder="Email address"
                  placeholderTextColor="#aaa"
                />
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity style={styles.logbutton} onPress={()=> navigation.navigate('Bottom')}>
                <Text
                  style={{ color: "#ffff", fontWeight: "bold", fontSize: 18 }}
                >
                  {" "}
                Get Link
                </Text>
              </TouchableOpacity>
              <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", marginTop: 15,color:Colors.gray }}>
                Remember your password ?
              </Text>
              <Pressable onPress={() => navigation.navigate('Sign Up')}>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 15,
                    color: Colors.secondary,
                    fontWeight:"500"
                  }}
                >
                  Login
                </Text>
              </Pressable>
            </View>
            </View>
            </View>
            <View style={styles.medLogoContainer}>
            <Image
              style={styles.medLogo}
              source={require("../assets/images/Group 187.png")}
            />
            <Text style={styles.appName}>Health Visit</Text>
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
                marginTop:10
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
})

export default ForgotPassword

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { Colors } from "../Constant";
import { TouchableOpacity } from "react-native-gesture-handler";

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <Image
          style={styles.mainLogo}
          source={require("../assets/images/logo1.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome to Health Visit</Text>
        <Text style={styles.starttext}>
        Let's Get Started!
        </Text>
        {/* <Text style={styles.tagline}>Your one-stop solution for booking doctor appointments easily and efficiently.</Text> */}
        <Text style={styles.tagline}>
          {" "}
          {/* Healthcare at Your Fingertips, Quick, Easy, Reliable 
          Appointments  */}
          Book Your Appointment Now.
        </Text>
      </View>
      <View style={styles.buttonCotainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={[styles.loginButton]} >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.loginButton,{backgroundColor:Colors.white}]} onPress={()=>navigation.navigate("Sign Up")}>
          <Text style={[styles.btnText,{color:Colors.secondary}]}>Signup</Text>
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.tagline} >
      Let's Get Started!
      </Text> */}
      <View style={styles.footer}>
        
          <View style={styles.medLogoContainer}>
            <Image
              style={styles.medLogo}
              source={require("../assets/images/Group 187.png")}
            />
            <Text style={styles.appName}>Health Visit</Text>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: Colors.blueLight,
  },
  LogoContainer: {
    width: "100%",
    height: 420,
    justifyContent: "flex-end",
  },
  mainLogo: {
    width: "100%",
    height: "100%",
    marginBottom: 0,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2A3559",
    textAlign: "center",
  },
  starttext:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#2A3559",
    textAlign: "center",
    marginTop:10
  },
  tagline: {
    fontSize: 17,
    color: Colors.gray,
    textAlign: "center",
    marginTop: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    height: 110,
    width: "100%",
  },
  footerBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  medLogoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
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
  loginButton: {
    width:180,
    height: 60,
    borderRadius: 20,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth:4,
    borderColor:Colors.secondary
  },
  buttonCotainer: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop:40
  },

  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color:Colors.white
  },
});

export default SplashScreen;

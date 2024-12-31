import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Colors } from "../Constant";
import { useState } from "react";

import Icon from "react-native-vector-icons/Zocial";
import PasIcon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <View style={styles.LogoContainer}>
          <Image
            style={{ width: "100%", height: 270 }}
            source={require("../assets/images/OBJECTS-01-01.png")}
          />
        </View>

        <View style={styles.logtex}>
          <Text style={styles.logtexin}>Welcome Back!</Text>
          <Text style={styles.subtext}> Login to your account</Text>
        </View>

        <View style={{ padding: 20 }}>
          <View style={{ marginVertical: 15 }}>
            <View style={styles.emailInp}>
              <Icon style={styles.icons} name="email" size={25} />
              <TextInput
                onChange={setEmail}
                value={email}
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#aaa"
              />
            </View>
          </View>
          <View style={{ marginTop: 8 }}>
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
            <Pressable onPress={() => navigation.navigate("Forgot Password")}>
              <Text
                style={{
                  textAlign: "right",
                  marginRight: 10,
                  color: Colors.secondary,
                  fontWeight: "500",
                }}
              >
                {" "}
                Forgot Password?
              </Text>
            </Pressable>
          </View>
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              style={styles.logbutton}
              onPress={() => navigation.navigate("Bottom")}
            >
              <Text
                style={{ color: "#ffff", fontWeight: "bold", fontSize: 18 }}
              >
                {" "}
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ textAlign: "center", marginTop: 15, color: Colors.gray }}
            >
              New on our platform ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Sign Up")}>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 15,
                  color: Colors.secondary,
                  fontWeight: "500",
                }}
              >
                Create an account
              </Text>
            </Pressable>
          </View>
          <View>
            <Text> </Text>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Reset Password")}
          style={styles.medLogoContainer}
        >
          <Image
            style={styles.medLogo}
            source={require("../assets/images/Group 187.png")}
          />
          <Text style={styles.appName}>Health Visit</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    // backgroundColor: Colors.blueLight,
  },
  LogoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  logtex: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
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
    borderWidth: 1,
    borderColor: Colors.borderColor,
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
  subtext: {
    color: Colors.secondary,
    fontWeight: "700",
  },
  medLogoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 30,
  },
  medLogo: {
    width: "15%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  appName: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: "900",
    alignItems: "center",
    marginTop: 15,
  },
});

export default LoginScreen;

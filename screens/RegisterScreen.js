import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  SafeAreaView,
  Alert,
} from "react-native";
import axios from "axios";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

const logo = require("../assets/images/logo.png");

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert("Fill in all fields");
    } else if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
    } else {
      const user = {
        username,
        email,
        password,
      };

      // send post request to backend

      await axios
        .post("http://192.168.0.15:8000/register", user)
        .then((response) => {
          Alert.alert(
            "Registration successful",
            "You have registered successfully "
          );

          setEmail("");
          setUsername("");
          setPassword("");
          setConfirmPassword("");

          navigation.navigate("Login");
        })
        .catch((error) => {
          Alert.alert("Error Signing up");
        });
    }
  };

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 40,
      }}
    >
      <View>
        <Image
          source={logo}
          style={{ width: 150, height: 100, objectFit: "contain" }}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,

              marginTop: 12,
              color: "#041E42",
              fontFamily: "Poppins_700Bold",
            }}
          >
            Register new account
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              paddingHorizontal: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Entypo name="user" size={24} color="gray" />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontFamily: "Poppins_400Regular",
                fontSize: username ? 16 : 16,
              }}
              placeholder="Enter your Username"
              value={username}
              onChangeText={(text) => {
                setUsername(text);
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              paddingHorizontal: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <MaterialIcons
              style={{ color: "gray" }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontFamily: "Poppins_400Regular",
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter your Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              paddingHorizontal: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <AntDesign name="lock1" size={24} color="gray" />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontFamily: "Poppins_400Regular",
                fontSize: password ? 16 : 16,
              }}
              placeholder="Enter your Password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>
        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#d0d0d0",
              paddingVertical: 5,
              paddingHorizontal: 5,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <AntDesign name="lock1" size={24} color="gray" />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontFamily: "Poppins_400Regular",
                fontSize: confirmPassword ? 16 : 16,
              }}
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
        </View>

        <View style={{ marginTop: 40 }} />
        <Pressable
          style={{
            width: 200,
            backgroundColor: "#FEBE10",
            borderRadius: 6,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15,
          }}
          onPress={handleRegister}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
              fontFamily: "Poppins_700Bold",
            }}
          >
            Register
          </Text>
        </Pressable>
        <Pressable
          style={{ marginTop: 25 }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              textAlign: "center",
              color: "gray",
              fontSize: 16,
              fontFamily: "Poppins_400Regular",
            }}
          >
            Already have an account ? Login
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: "20",
    fontFamily: "Poppins_700Bold",
  },
  text: {
    fontFamily: "Poppins_400Regular",
    color: "gray",
    marginVertical: 10,
    width: 300,
  },
});

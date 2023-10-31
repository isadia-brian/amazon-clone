import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  return (
    <>
      <StackNavigator />
    </>
  );
}

const styles = StyleSheet.create({});

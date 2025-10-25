import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: login logic here
    navigation.navigate("Overview");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome back 👋</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter email"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            style={[styles.input, { flex: 1 }]}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In */}
      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR LOG IN WITH</Text>
      <View style={styles.socialContainer}>
        <Ionicons name="logo-google" size={28} color="#DB4437" />
        <Ionicons name="logo-facebook" size={28} color="#1877F2" />
        <Ionicons name="logo-apple" size={28} color="#000" />
      </View>

      <View style={styles.signUpContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 24, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 30, textAlign: "center" },
  inputContainer: { marginBottom: 16 },
  label: { fontWeight: "600", marginBottom: 6 },
  input: { backgroundColor: "#f5f5f5", borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12 },
  passwordContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "#f5f5f5", borderRadius: 10, paddingHorizontal: 14 },
  forgotPassword: { color: "#00bcd4", textAlign: "right", marginBottom: 30 },
  signInButton: { backgroundColor: "#00cfff", paddingVertical: 15, borderRadius: 30, alignItems: "center", marginBottom: 25 },
  signInText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  orText: { textAlign: "center", color: "#888", marginBottom: 15 },
  socialContainer: { flexDirection: "row", justifyContent: "center", gap: 20, marginBottom: 25 },
  signUpContainer: { flexDirection: "row", justifyContent: "center" },
  signUpText: { color: "#00bcd4", fontWeight: "600" },
});

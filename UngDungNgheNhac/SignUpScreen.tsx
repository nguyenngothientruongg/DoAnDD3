import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import LoginScreen from "./LoginScreen";

export default function SignUpScreen({ navigation }) {
  type InputFieldProps = {
    label: string;
    secureTextEntry?: boolean;
  };

  const InputField: React.FC<InputFieldProps> = ({ label, secureTextEntry }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholder={label}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SIGN UP</Text>

      <InputField label="Your Fullname" />

      <InputField label="Your Username" />

      <InputField label="Your Email" />

      <InputField label="Your Password" secureTextEntry />

      <InputField label="Confirm Your Password" secureTextEntry />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>SignUp</Text>
      </TouchableOpacity>

      <View style={styles.signUpSection}>
        <Text style={{ color: 'white' }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#080C0F",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputLabel: {
    color: "white",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#080C0F",
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    fontSize: 16,
    borderColor: '#A307CA',
    borderWidth: 2,
    fontStyle: 'italic',
  },
  loginButton: {
    backgroundColor: "#A307CA",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 25,
    marginVertical: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpSection: {
    marginTop: 50,
    alignItems: "center",
  },
  signUpText: {
    color: "#B714DF",
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
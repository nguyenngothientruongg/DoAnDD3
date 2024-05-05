import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
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
  
  type RememberMeAndForgotPasswordProps = {
    rememberMeLabel: string;
    forgotPasswordLabel: string;
  };
  
  const RememberMeAndForgotPassword: React.FC<RememberMeAndForgotPasswordProps> = ({
    rememberMeLabel,
    forgotPasswordLabel,
  }) => (
    <View style={styles.rememberForgotContainer}>
      <View style={styles.rememberMeContainer}>
        <View style={styles.rememberMeCheckbox} />
        <Text style={styles.rememberMeText}>{rememberMeLabel}</Text>
      </View>
      <Text style={styles.forgotPasswordText}>{forgotPasswordLabel}</Text>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>YOUR LOGO</Text>

      <InputField label="Enter Username" />

      <InputField label="Enter Password" secureTextEntry />

      <RememberMeAndForgotPassword
        rememberMeLabel="Remember me"
        forgotPasswordLabel="Forgot Password?"
      />

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: '35%', marginVertical: 5 }} />
        <Text style={{ marginHorizontal: 10, color: 'white' }}>Or</Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: '35%', marginVertical: 5 }} />
      </View>

      <View style={styles.signUpSection}>
        <Text style={{ color: 'white' }}>Don’t have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

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
  rememberForgotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    marginVertical: 20,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberMeCheckbox: {
    height: 20,
    width: 20,
    borderColor: "#CA07B6", 
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 10,
  },
  rememberMeText: {
    color: "#CA07B6",
  },
  forgotPasswordText: {
    color: "#CA07B6", 
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
    marginTop: 30,
    alignItems: "center",
  },
  signUpText: {
    color: "#B714DF",  
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
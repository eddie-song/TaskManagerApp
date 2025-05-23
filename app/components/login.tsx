import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

// Login page for the task manager app
// Includes demo login functionalities and signup page redirect
// Login functionality is not implemented, but the placeholder function logs user info to console

// Login page component
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Placeholder function for loggin in
  // Logs user info to console, then redirects to home page
  const handleLogin = () => {
    console.log('Login attempted with:', email, password);
    router.push('/components/home');
  };

  // Function to return to signup page
  const handleSignUp = () => {
    router.push('/components/signup');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        {/* Headers for the login page */}
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>
          {/* Text inputs for email and password */}
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#8E8E93"
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#8E8E93"
              />
            </View>
            {/* Submission button that logs user info to console */}
            <TouchableOpacity 
              style={styles.loginButton} 
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <Text style={styles.loginButtonText}>Sign In</Text>
            </TouchableOpacity>
            {/* Redirect button to signup page */}
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity onPress={handleSignUp} activeOpacity={0.7}>
                <Text style={styles.signUpLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    maxWidth: 420,
    width: '100%',
    alignSelf: 'center',
  },
  headerContainer: {
    marginBottom: 56,
  },
  formContainer: {
    gap: 20,
  },
  title: {
    fontSize: 44,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
    fontFamily: Platform.select({ ios: 'SF Pro Display', android: 'sans-serif' }),
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 17,
    color: '#8E8E93',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
    letterSpacing: -0.2,
    lineHeight: 22,
  },
  inputWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    height: 58,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 17,
    backgroundColor: '#F2F2F7',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
    color: '#000',
  },
  loginButton: {
    height: 58,
    backgroundColor: '#007AFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
    letterSpacing: -0.2,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    paddingVertical: 8,
  },
  signUpText: {
    fontSize: 15,
    color: '#8E8E93',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
    letterSpacing: -0.2,
  },
  signUpLink: {
    fontSize: 15,
    color: '#007AFF',
    fontWeight: '600',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
    letterSpacing: -0.2,
  },
});

export default LoginScreen; 
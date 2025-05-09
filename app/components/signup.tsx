import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

// Sign up page for the task manager app
// Includes demo signup functionalities and login page redirect
// Signup functionality is not implemented, but the placeholder function logs user info to console

// Signup page component
const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Placeholder function for signing up
  // Logs user info to console, then redirects to home page
  const handleSignUp = () => {
    console.log('Signup attempted with:', email, password);
    router.push('/components/home');
  };

  // Function to return to login page
  const handleBackToLogin = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.contentContainer}>
          {/* Headers for the signup page */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Sign up to get started</Text>
          </View>
          {/* Text inputs for email, password, and confirm password */}
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
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholderTextColor="#8E8E93"
              />
            </View>
            {/* Submission button that logs user info to console */}
            <TouchableOpacity 
              style={styles.signUpButton} 
              onPress={handleSignUp}
              activeOpacity={0.8}
            >
              <Text style={styles.signUpButtonText}>Create Account</Text>
            </TouchableOpacity>
            {/* Redirect button to login page */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleBackToLogin} activeOpacity={0.7}>
                <Text style={styles.loginLink}>Sign in</Text>
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
  signUpButton: {
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
  signUpButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
    letterSpacing: -0.2,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    paddingVertical: 8,
  },
  loginText: {
    fontSize: 15,
    color: '#8E8E93',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
    letterSpacing: -0.2,
  },
  loginLink: {
    fontSize: 15,
    color: '#007AFF',
    fontWeight: '600',
    fontFamily: Platform.select({ ios: 'SF Pro Text', android: 'sans-serif' }),
    letterSpacing: -0.2,
  },
});

export default SignUpScreen; 
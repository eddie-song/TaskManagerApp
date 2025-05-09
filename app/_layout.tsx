import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{ 
        headerShown: false
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="components/signup" />
      <Stack.Screen name="components/home" />
    </Stack>
  );
}

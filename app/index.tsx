import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import "../global.css";

const logo = require('./assets/images/jdklogo.png');

export default function AuthEntry() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<null | 'login' | 'signup'>(null);
  const [userType, setUserType] = useState<null | 'client' | 'freelancer'>(null);

  const handleContinue = () => {
    if (authMode === 'login') {
      router.push(`/login?role=${userType}`);
    } else if (authMode === 'signup') {
      router.push(`/signup?role=${userType}`);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-8">
      <Image source={logo} style={{ width: 140, height: 140, marginBottom: 40 }} resizeMode="contain" />

      <TouchableOpacity
        className="bg-blue-500 rounded-md px-6 py-3 w-full mb-4"
        onPress={() => setAuthMode('login')}
      >
        <Text className="text-white text-center font-medium text-base">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-green-500 rounded-md px-6 py-3 w-full"
        onPress={() => setAuthMode('signup')}
      >
        <Text className="text-white text-center font-medium text-base">Sign Up</Text>
      </TouchableOpacity>

      {authMode && (
        <View className="mt-8 w-full">
          <Text className="text-gray-800 text-sm font-medium mb-2 text-center">
            {authMode === 'login' ? 'Logging in as:' : 'Signing up as:'}
          </Text>

          <View className="flex-row justify-evenly mb-4">
            {['client', 'freelancer'].map((role) => (
              <Pressable
                key={role}
                className={`px-5 py-2 rounded-full border ${
                  userType === role ? 'bg-blue-100 border-blue-500' : 'border-gray-300'
                }`}
                onPress={() => setUserType(role as 'client' | 'freelancer')}
              >
                <Text className="text-sm capitalize text-gray-800">{role}</Text>
              </Pressable>
            ))}
          </View>

          <TouchableOpacity
            className={`rounded-md px-6 py-3 ${
              userType
                ? 'bg-indigo-600'
                : 'bg-indigo-300'
            }`}
            disabled={!userType}
            onPress={handleContinue}
          >
            <Text className="text-white text-center font-medium text-base">
              Continue to {authMode === 'login' ? 'Login' : 'Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

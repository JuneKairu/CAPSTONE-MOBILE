import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold text-gray-800">Welcome Home, June!</Text>
      <Text className="text-base text-gray-500 mt-2">Your splash screen is working perfectly.</Text>
    </View>
  );
}

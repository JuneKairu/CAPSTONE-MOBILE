import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import '../../global.css'

export default function LoginScreen() {
  const { role } = useLocalSearchParams();

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-2xl font-bold text-gray-800 mb-2">Login</Text>
      <Text className="text-base text-gray-600">
        Logging in as: <Text className="capitalize font-medium">{role}</Text>
      </Text>
      {/* TODO: Add login form here */}
    </View>
  );
}

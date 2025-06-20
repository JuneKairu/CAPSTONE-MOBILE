import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import '../../global.css';

export default function SignUpScreen() {
  const { role } = useLocalSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormComplete = name && email && password;

  const handleSubmit = () => {
    console.log({ name, email, password, role });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-gray-100 justify-center items-center px-6"
    >
      <View className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 space-y-5">
        <View className="items-center">
          <Text className="text-2xl font-semibold text-gray-900">Sign Up</Text>
          <Text className="text-sm text-gray-500 mt-1">
            Signing up as:{" "}
            <Text className="capitalize text-gray-700 font-medium">{role}</Text>
          </Text>
        </View>

        <TextInput
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          className="border border-gray-300 rounded-md px-4 py-3 text-sm bg-white"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-gray-300 rounded-md px-4 py-3 text-sm bg-white"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="border border-gray-300 rounded-md px-4 py-3 text-sm bg-white"
        />

        <TouchableOpacity
          onPress={handleSubmit}
          disabled={!isFormComplete}
          className={`mt-2 py-3 rounded-md ${
            isFormComplete ? 'bg-indigo-600' : 'bg-indigo-300'
          }`}
        >
          <Text className="text-white text-center font-medium text-base">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

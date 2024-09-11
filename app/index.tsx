import { Stack, Link } from 'expo-router';
import { Text, View, TextInput } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className='flex-row justify-around p-5'>
        <Text className='color-[#007AFF] font-bold text-xl'>English</Text>
        <FontAwesome5 name="exchange-alt" size={18} color="gray" />
        <Text className='color-[#007AFF] font-bold text-xl'>Sinhala</Text>
      </View>
      <View className='p-3 border-y border-gray-300'>
        <View className='flex-row items-center gap-5'>
          <TextInput placeholder='Enter text' className='text-lg min-h-32 flex-1 text-xl' multiline maxLength={5000} />
          <FontAwesome5 name="arrow-circle-right" size={24} color="#007AFF" />
        </View>
        <View className='flex-row items-center justify-between'>
          <FontAwesome5 name="microphone" size={18} color="dimgray" />
          <Text className='color-gray-500 text-sm'> 0 / 5,000</Text>
        </View>
      </View>

    <View className='gap-5 p-5 bg-gray-200'>
      <Text className='min-h-32 text-xl'>Output</Text>
      <View className='flex-row items-center justify-between'>
          <FontAwesome6 name="volume-high" size={18} color="dimgray" />
          <FontAwesome5 name="copy" size={18} color="dimgray"  />
          
        </View>
    </View>

    </>
  );
}

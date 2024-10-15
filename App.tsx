import { TaskBar } from '@components/taskbar';
import {
  K2D_400Regular,
  K2D_600SemiBold,
  K2D_700Bold,
  useFonts,
} from "@expo-google-fonts/k2d";
import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  const [fontsLoaded] = useFonts({ 
    K2D_400Regular, 
    K2D_600SemiBold, 
    K2D_700Bold
  })
  return (
      <SafeAreaView className='flex-1 bg-zinc-200'>
        <View className="flex-1 items-center justify-center bg-zinc-200 dark:bg-zinc-950">
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
          {fontsLoaded ? <TaskBar /> : <Text className="text-white">Carregando...</Text>}
        </View>
      </SafeAreaView>
  );
}

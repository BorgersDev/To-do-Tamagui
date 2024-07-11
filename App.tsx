import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { TamaguiProvider } from 'tamagui';

import config from './tamagui.config';
import { useFonts } from 'expo-font';
import { Home } from 'screens/home';

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <TamaguiProvider config={config}>
      <Home />
      <StatusBar style="auto" />
    </TamaguiProvider>
  );
}

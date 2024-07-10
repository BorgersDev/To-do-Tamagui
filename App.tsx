import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { TamaguiProvider } from 'tamagui';

import config from './tamagui.config';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <ScreenContent title="Home" path="App.tsx">
        <Text>Open up App.tsx to start working on your app!</Text>
      </ScreenContent>
      <StatusBar style="auto" />
    </TamaguiProvider>
  );
}

import {Home} from './src/Screens/Home';

import { NativeBaseProvider, StatusBar } from "native-base";

import { THEME } from './src/styles/theme';

import { useFonts, Roboto_400Regular , Roboto_700Bold} from '@expo-google-fonts/roboto';

import { Loading } from './src/components/Loading';



export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular , Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME} >
       <StatusBar
         barStyle="light-content"
       />
       { fontsLoaded ? < Home /> :  <Loading/>}
    </NativeBaseProvider>
  );
}


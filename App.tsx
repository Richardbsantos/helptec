import {SignIn} from './src/Screens/SignIn';
import { NativeBaseProvider, Box, theme } from "native-base";

import { THEME } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME} >
       < SignIn />
    </NativeBaseProvider>
  );
}


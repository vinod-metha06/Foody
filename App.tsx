import React from 'react';
import Providers from './navigation';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return <Providers />;
};

export default App;

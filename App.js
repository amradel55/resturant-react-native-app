import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from 'react-native-screens';


enableScreens();

const fetchFonts = async () => {
  
  return Promise.all([
    Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    })
  ])

};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={() => {
          fetchFonts()
        }}
        onFinish={() => {
          setTimeout(() => {
            setFontLoaded(true)
          }, 1000); // this solution not true but i have to keep it and i'll return to it agin the proble is it loads the finish before it done with the start so i had to put it on the q
        }}
        onError={console.warn}
      />
    );
  }

  return <MealsNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

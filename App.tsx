// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import NoteScreen from './screens/NoteScreen';
import AboutScreen from './screens/AboutScreen';

export type RootStackParamList = {
  Home: undefined;
  Note: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Note" component={NoteScreen} options={{ title: 'Your Note' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About Author' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

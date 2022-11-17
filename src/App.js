import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProjectContext } from './ProjectContext';

// Screens
import ListScreen from './ListScreen/ListScreen';
import ListAddScreen from './ListAddScreen/ListAddScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProjectContext>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Lists" component={ListScreen}
            options={{
              headerTitleAlign: "center",
              headerTitle: (() => (<Text style={{ fontSize: 24 }}>Lists</Text>))
            }}
          />
          <Stack.Screen name="AddList" component={ListAddScreen}
            options={{
              headerTitleAlign: "center",
              headerTitle: (() => (<Text style={{ fontSize: 23 }}>Add list</Text>))
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProjectContext>
  );
}




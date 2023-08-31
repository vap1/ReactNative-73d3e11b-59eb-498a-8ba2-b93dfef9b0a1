
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContextProvider } from './contexts/AuthContext';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminUserDetailsScreen from './screens/AdminUserDetailsScreen';
import StackNavigator from './navigation/StackNavigator';
import TabNavigator from './navigation/TabNavigator';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen
            name="StackNavigator"
            component={StackNavigator}
            options={{ headerShown: false }}
          />
          <AppStack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen, AdminUserDetailsScreen } from '../screens';
import { AuthContext } from '../contexts';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { isAdmin } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" color={color} size={size} />
            ),
          }}
        />
        {isAdmin && (
          <Tab.Screen
            name="User Details"
            component={AdminUserDetailsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="people" color={color} size={size} />
              ),
            }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
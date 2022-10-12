import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dogs from './Dogs';
import Cats from './Cats';

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Perros"
        component={Dogs}
        options={{
          tabBarLabel: 'Perros',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dog" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Gatos"
        component={Cats}
        options={{
          tabBarLabel: 'Gatos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cat" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

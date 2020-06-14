import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from './components/PayButton';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Pay from './pages/Pay';
import Notifications from './pages/Notifications';
 
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Notifications"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton 
                onPress={() => navigation.navigate('Pay')} 
                focused={focused}
              />
            );
          }

          const { lib: Icon, name } = icons[route.name];

          return <Icon name={name} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}

    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Inicio',
        }}
      />
      <Tab.Screen 
        name="Wallet" 
        component={Wallet} 
        options={{
          title: 'Carteira',
        }}
      />
      <Tab.Screen 
        name="Pay" 
        component={Pay} 
        options={{
          title: '',
        }}
      />

      <Tab.Screen 
        name="Notifications" 
        component={Notifications} 
        options={{
          title: 'Notificações',
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={Pay} 
        options={{
          title: 'Ajustes',
        }}
      />
    </Tab.Navigator>
  );
}
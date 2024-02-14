import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Profile from '../screens/Profile/Profile';
import Skills from '../screens/Skills/Skills';

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFF',     
        tabBarStyle: { backgroundColor: '#242424', height: 60, paddingBottom: 5 },
        headerShown: false,
      }}
    >
      <Screen
        name='profile'
        component={Profile}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="user"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name='skills'
        component={Skills}
        options={{
          title: "Skills",
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="award"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  );
}
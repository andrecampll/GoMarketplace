import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Image } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { ThemeContext } from 'styled-components';
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';
import Header from '../components/Header';

import Logo from '../assets/logo.png';

import LogoDark from '../assets/logoDark.png';

const App = createStackNavigator();

interface Props {
  toggleTheme(): void;
}

const AppRoutes: React.FC<Props> = ({ toggleTheme }) => {
  const { logo, colors } = useContext(ThemeContext);

  return (
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: { backgroundColor: '#EBEEF8' },
      }}
      initialRouteName="Dashboard"
    >
      <App.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          header: () => <Header toggleTheme={toggleTheme} />,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen
        options={{
          headerTransparent: true,
          headerTitle: () => <Image source={logo} />,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },

          headerBackImage: () => (
            <FeatherIcon
              name="chevron-left"
              size={24}
              color={colors.terciary}
            />
          ),
        }}
        name="Cart"
        component={Cart}
      />
    </App.Navigator>
  );
};

export default AppRoutes;

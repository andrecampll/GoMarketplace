import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import AppContainer from './hooks';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC = () => (
  <View style={{ backgroundColor: '#312e38', flex: 1 }}>
    <AppContainer>
      <ThemeProvider theme={light}>
        <StatusBar barStyle="dark-content" backgroundColor="#EBEEF8" />
        <Routes />
      </ThemeProvider>
    </AppContainer>
  </View>
);

export default App;

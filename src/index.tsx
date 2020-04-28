import 'react-native-gesture-handler';
import React, { useState, useCallback } from 'react';
import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import AppContainer from './hooks';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  return (
    <View style={{ backgroundColor: '#312e38', flex: 1 }}>
      <AppContainer>
        <ThemeProvider theme={theme}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={theme.title === 'light' ? '#EBEEF8' : '#111'}
          />
          <Routes toggleTheme={toggleTheme} />
        </ThemeProvider>
      </AppContainer>
    </View>
  );
};

export default App;

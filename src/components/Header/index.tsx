import React, { useContext } from 'react';
import { Image } from 'react-native';
import { ThemeContext } from 'styled-components';

import LogoLight from '../../assets/logo.png';
import LogoDark from '../../assets/logoDark.png';

import { Container, Switch } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Image source={title === 'light' ? LogoLight : LogoDark} />
      <Switch
        onValueChange={() => toggleTheme()}
        value
        trackColor={{ false: colors.terciary, true: colors.terciary }}
        thumbColor={title === 'light' ? '#EBEEF8' : '#444'}
      />
    </Container>
  );
};

export default Header;

import 'styled-components';
import { ImageSourcePropType } from 'react-native';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      secondary: string;

      terciary: string;

      iconColor: string;

      actionButtonColor: string;
    };

    logo: ImageSourcePropType;
  }
}

import React from 'react';

import AppRoutes from './app.routes';

interface Props {
  toggleTheme(): void;
}

const Routes: React.FC<Props> = ({ toggleTheme }) => {
  return <AppRoutes toggleTheme={toggleTheme} />;
};

export default Routes;

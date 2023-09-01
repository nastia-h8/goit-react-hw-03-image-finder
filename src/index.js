import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App } from 'components/App';

const theme = {
  colors: {
    primary: '#212121',
    secondary: '#757575',
    tertiary: '#423e3e',
    accent: '#3f51b5',
    light: '#ffffff',
    bgc: 'rgba(0, 0, 0, 0.8)',
    border: 'rgba(117, 117, 117, 0.2)',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    circle: '50%',
  },
  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: value => `${value * 4}px`,
  shadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

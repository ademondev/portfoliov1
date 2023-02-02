import { MantineProvider } from '@mantine/core';
import { FC } from 'react'
import App from './App';

const AppWrapper: FC = () => {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  );
}

export default AppWrapper;

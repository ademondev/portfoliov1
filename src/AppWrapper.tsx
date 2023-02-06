import { MantineProvider } from '@mantine/core';
import { FC, useEffect, useState } from 'react'
import App from './App';
import LoadingScreen from './components/LoadingScreen';

const AppWrapper: FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>

      {loading ? 
        <LoadingScreen /> 
        : 
        <App />
      }
    </MantineProvider>
  );
}

export default AppWrapper;

import { MantineProvider } from '@mantine/core';
import { FC, useEffect, useState } from 'react'
import App from './App';
import LoadingScreen from './components/LoadingScreen';
import { NotificationsProvider } from '@mantine/notifications';


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
      <NotificationsProvider>
        {loading ? 
          <LoadingScreen /> 
          : 
          <App />
        }
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default AppWrapper;

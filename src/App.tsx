import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { initializeGA4 } from './hooks/useGoogleAnalytics';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Initialize Google Analytics 4
    initializeGA4();
  }, []);
  return (
    <div className="relative">
      <RouterProvider 
        router={router} 
        future={{
          v7_startTransition: true,
        }}
      />
    </div>
  );
}

export default App;
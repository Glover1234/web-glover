import { useEffect, Suspense } from 'react';
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
      <Suspense fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <p className="mt-4 text-gray-600">Cargando...</p>
          </div>
        </div>
      }>
        <RouterProvider 
          router={router} 
          future={{
            v7_startTransition: true,
          }}
        />
      </Suspense>
    </div>
  );
}

export default App;
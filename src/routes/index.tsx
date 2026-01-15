import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Pages
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import BusinessLines from '../pages/BusinessLines';
import Doors from '../pages/business/Doors';
import Furniture from '../pages/business/Furniture';
import Wood from '../pages/business/Wood';
import Structures from '../pages/business/Structures';
import Complements from '../pages/business/Complements';
import CertificationsSustainability from '../pages/CertificationsSustainability';
import TechnologicalProcesses from '../pages/TechnologicalProcesses';
import Contact from '../pages/Contact';
import SalesRoom from '../pages/SalesRoom';

export const navigationItems = [
  { path: '/', name: 'Home' },
  { path: '/business-lines', name: 'Líneas de negocio' },
  { path: '/certifications-sustainability', name: 'Sustentabilidad' },
  { path: '/technological-processes', name: 'Nuestros Procesos Tecnológicos' },
  { path: '/sales-room', name: 'Sala de ventas' },
  { path: '/about-us', name: 'Nosotros' },
  { path: '/contact', name: 'Contacto' },
];

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'business-lines',
          element: <BusinessLines />,
        },
        {
          path: 'business-lines/doors',
          element: <Doors />,
        },
        {
          path: 'business-lines/furniture',
          element: <Furniture />,
        },
        {
          path: 'business-lines/wood',
          element: <Wood />,
        },
        {
          path: 'business-lines/structures',
          element: <Structures />,
        },
        {
          path: 'business-lines/complements',
          element: <Complements />,
        },
        {
          path: 'certifications-sustainability',
          element: <CertificationsSustainability />,
        },
        {
          path: 'technological-processes',
          element: <TechnologicalProcesses />,
        },
        {
          path: 'about-us',
          element: <AboutUs />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
        {
          path: 'sales-room',
          element: <SalesRoom />,
        },
      ],
    },
]);
export default router;
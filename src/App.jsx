import Routing from './utils/Routing';
import Header from './components/Header';
import Footer from './components/Footer';
import { useLocation } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';

const App = () => {
  const location = useLocation();

  // Define base routes where Header and Footer should not be displayed
  const noHeaderFooterRoutes = ["/mandate", "/irda-license"];

  // Check if the current path starts with any route in noHeaderFooterRoutes
  const shouldHideHeaderFooter = noHeaderFooterRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <div className='font-sans text-[#1a202c]'>
      {!shouldHideHeaderFooter && <Header />}
      <Routing />
      {!shouldHideHeaderFooter && <Footer />}
      <SpeedInsights />
    </div>
  );
}

export default App;

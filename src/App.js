import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import UserRoutes from './helpers/userRoutes';
  
function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <UserRoutes />
        <Footer />
    </BrowserRouter>
  );
}

export default App;

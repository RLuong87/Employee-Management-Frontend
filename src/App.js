import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router/AppRouter';
import { AuthProvider } from './components/Providers/AuthProvider';
import Footer from './footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

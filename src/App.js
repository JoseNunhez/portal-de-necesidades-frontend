import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import CreateServicePage from './pages/createservicepage';
import HomePage from './pages/homepage';
import Login from './pages/loginpage';
import NotFoundPage from './pages/notfoundpage';
import Register from './pages/registerpage';
import ServicePage from './pages/servicepage';
import UserPage from './pages/userpage';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/service/:id" element={<ServicePage />} />
          <Route path="/service" element={<CreateServicePage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

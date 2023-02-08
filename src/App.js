import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './pages/homepage';
import Login from './pages/loginpage';
import NotFoundPage from './pages/notfoundpage';
import Register from './pages/registerpage';
import ServicePage from './pages/servicepage';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/service/:id" element={<ServicePage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

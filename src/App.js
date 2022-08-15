import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

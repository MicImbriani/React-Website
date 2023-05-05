import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' component={About} />
      </Routes>
    </Router>
  );
}

export default App;

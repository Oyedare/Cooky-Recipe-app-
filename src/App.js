import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Recipe } from './pages/Recipe';
function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipe />} />
        </Routes>
    </div>
  );
}

export default App;

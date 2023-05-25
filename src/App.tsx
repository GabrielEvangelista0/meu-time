import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Pais from './pages/Pais';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login/' element={<Login />} />
      <Route path='/:id/' element={<Pais />} />
    </Routes>
  );
}

export default App;

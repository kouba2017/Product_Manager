import './App.css';
import { Routes,Route } from 'react-router-dom';
import Main from './views/Display';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path='/' />
        <Route element={<OneProduct/>} path='/:id' />
        <Route element={<EditProduct/>} path='/edit/:id' />
      </Routes>
    </div>
  );
}

export default App;

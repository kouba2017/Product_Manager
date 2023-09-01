import './App.css';
import ProductForm from './components/ProductForm';
import { Routes,Route } from 'react-router-dom';
import Main from './views/Main';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path='/home' />
      </Routes>
    </div>
  );
}

export default App;

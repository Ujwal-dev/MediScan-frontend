import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login /> } />
          <Route path='/register' element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
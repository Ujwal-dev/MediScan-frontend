import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterDone from './components/Register/RegisterDone';
import UserContextProvider from './Contexts/UserContextProvider';
import Service1 from './components/Service/Service1';


function App() {

 
  return (
    <UserContextProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login /> } />
            <Route path='/register' element={<Register />}/>
            <Route path='/registered' element={<RegisterDone />}/>
            <Route path='/service1' element={<Service1 />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </UserContextProvider>
  );
}

export default App;
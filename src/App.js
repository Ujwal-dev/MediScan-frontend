import './App.css';
import Header from './Header/Header';
import Main from './Main-Section/Main';
import Service from './Service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Service num="1"/>
      <Service num="2"/>
      <Service num="3"/>
    </div>
  );
}

export default App;
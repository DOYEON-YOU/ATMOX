import { Routes, Route } from 'react-router-dom';
import './Styles/css/main.css';
import Home_ATMOX from './Components/ATMOX/Home_ATMOX'
import Home_KATOMORI from './Components/KATOMORI/Home_KATOMORI'
import Home from './Components/Home';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/atmox' element={<Home_ATMOX/>}/>
        <Route path='/katomori' element={<Home_KATOMORI/>}/>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { Navbar } from './component/Navbar';
import { Main1 } from './component/Main';
import { Main2 } from './component/Main';
import { Footer } from './component/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {   
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="main1" element={<Main1/>}/>
        <Route exact path="main2" element={<Main2/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

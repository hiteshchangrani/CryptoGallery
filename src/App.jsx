import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import Header from './components/Header';
import Footer from './components/Footer'
import CoinDetails from './components/CoinDetails';


function App() {

  return (
    <BrowserRouter>


      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coins' element={<Coins/>} />
        <Route path='/exchanges' element={<Exchanges/>} />
        <Route path='/coins/:id' element={<CoinDetails/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App

import './App.css';

import {BrowserRouter} from 'react-router-dom'
import {CartProvider} from './context/CartContext';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main/>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

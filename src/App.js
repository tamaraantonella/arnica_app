import './App.css';

import {BrowserRouter} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

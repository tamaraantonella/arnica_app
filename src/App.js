import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting='Welcome' />
      <Footer/>
    </>
  );
}

export default App;

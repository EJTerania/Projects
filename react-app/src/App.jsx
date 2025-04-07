
import './App.css'
import Header from './components/Header/Header';
import { HashRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <Router>
    <>
      <Header/>
      <Footer/>
    </>
   </Router>
  )
}

export default App

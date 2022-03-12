import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>

          {/* <Route path='/Home' element={<Home />} />
          <Route exact path='/' element={<Home />} /> */}
        </Routes>
        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;

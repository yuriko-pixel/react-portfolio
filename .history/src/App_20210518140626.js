import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './components/header'
import Top from './components/top'
import Footer from './components/footer'
import Works from './components/works'
import WorkTemp from './components/worktemp'
import about from './components/about'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Top/>
        <Works/>
        <Footer/>
        <Route path='/about' component={about}></Route>
        <Route path='/works/:id'><WorkTemp /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

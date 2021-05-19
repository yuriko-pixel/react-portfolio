import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import WorkTemp from './components/worktemp'
import about from './components/about'
import home from './components/home'
import Nav from './components/nav'
import Footer from './components/footer'
import works from './components/works'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path='/' component={home}></Route>
        <Route path='/about' component={about}></Route>
        <Route path='/works' component={works}></Route>
        <Route path='/:name'><WorkTemp /></Route>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

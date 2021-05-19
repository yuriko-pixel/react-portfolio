import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import WorkTemp from './components/worktemp'
import about from './components/about'
import home from './components/home'
import Header from './components/header'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={home}></Route>
        <Route path='/about' component={about}></Route>
        <Route path='/works/:id'><WorkTemp /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import WorkTemp from './components/worktemp'
import about from './components/about'
import home from './components/home'
import Nav from './components/nav'
import Footer from './components/footer'
import works from './components/works'
import contact from './components/contact'
import qiita from './components/qiita'
import blog from './components/blog'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path='/' component={home}></Route>
        <Route path='/about' component={about}></Route>
        <Route path='/works' component={works}></Route>
        <Route path='/blog' component={blog}></Route>
        <Route path='/qiita' component={qiita}></Route>
        <Route path='/contact' component={contact}></Route>
        <Route path='/work/:name'><WorkTemp /></Route>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

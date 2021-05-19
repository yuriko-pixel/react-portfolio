import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header'
import Top from './components/top'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Top/>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

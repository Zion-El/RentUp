import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import About from './components/About/About'
import Service from './components/Service/Service'
import Blog from './components/Blog/Blog'
import Price from './components/Pricing/Price';
import Contact from './components/Contact/Contact';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/pricing' element={<Price/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

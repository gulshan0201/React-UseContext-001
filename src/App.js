import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import ThemeContext from './Components/Context';
import { Routes, Route } from 'react-router-dom'
import Contact from './Components/Contact';
import Services from './Components/Services';
import Home from './Components/Home';


function App() {

  const [isLight, setIsLight] = useState(true)

  const changeTheme = () => {
    setIsLight((prevState) => {
      return !prevState
    })
  }
  return (

    <BrowserRouter>
      <ThemeContext.Provider value={{ isLight, changeTheme }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </ThemeContext.Provider>

    </BrowserRouter>
  );
}

export default App;

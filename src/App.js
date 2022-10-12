import { Route, Routes } from 'react-router-dom';
import './App.css';
import CardId from './pages/CardId/CardId.js';
import GenderCategory from './pages/genderCategory/GenderCategory';
import Home from './pages/home/Home';
import Index from './pages/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/*' element = {<Index/>}>
            <Route path = '' element = {<Home/>}/>
            <Route path = ':id' element = {<CardId/>}/>
            <Route path = 'category' element = {<GenderCategory/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

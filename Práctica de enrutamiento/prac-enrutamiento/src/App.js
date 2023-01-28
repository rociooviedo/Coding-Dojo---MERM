import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import HelloColor from './components/hellocolor';
import WordsNumbers from './components/word-number';

function App() {
  return (
    <div className="App mt-4">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:variable' element={<WordsNumbers />} />
          <Route path='/:word/:color/:background' element={<HelloColor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
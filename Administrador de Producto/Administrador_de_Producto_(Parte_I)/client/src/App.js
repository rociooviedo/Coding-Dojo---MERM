import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetail from './views/ProductDetail';
import Updates from './views/Updates';
function App() {
  return (
    <div className="App mt-4">
      <BrowserRouter>
        <Route path="/producto/" render={ (routeProps) => <Main {...routeProps} />}/>
        <Route path="/producto/:id" render={ (routeProps) => <ProductDetail {...routeProps} />} />
        <Route path="/producto/:id/edit" render={ (routeProps) => <Updates {...routeProps}  />}/>
      </BrowserRouter>
    </div>
  );
}
export default App;

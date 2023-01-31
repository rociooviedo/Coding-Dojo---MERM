import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetail from './views/ProductDetail';
function App() {
  return (
    <BrowserRouter>
      <Route path="/producto/" render={ (routeProps) => <Main {...routeProps} />}/>
      <Route path="producto/:id" render={ (routeProps) => <ProductDetail {...routeProps} />} />
  </BrowserRouter>
  );
}
export default App;
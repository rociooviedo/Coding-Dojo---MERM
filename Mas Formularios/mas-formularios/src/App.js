import './App.css';
import Form from './components/Form';
import React, {useState} from 'react';
function App(){
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className='App'>
      <Form inputs ={state} setInputs = {setState}/>
    </div>
  );
}
export default App;

// import logo from './logo.svg';
import './App.css';
import Titulo from './components/titulo';
import ListaTareas from './components/listatareas';

function App() {
  const taskList = ["Learn React -- Aprender React", "Climb Mt. Everest -- Escalar el Mt. Everest",
  "Run a marathon - Correr una maraton","Feed the dogs -- Alimentar a los perros"];
  return (
    <>
      <Titulo />
      <ListaTareas tareas = {taskList}/>
    </>
  );
}

export default App;
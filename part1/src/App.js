import './App.css';
import Mensaje from './Mensaje'


function App() {
  const a = 2
  const b =3
  return (
    <div className="App">
      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es: </p>
        {a+b}
      </div>
      <Mensaje color="yellow" message="Estamos Trabajando"/>
      <Mensaje color="blue" message="en un curso"/>
      <Mensaje color="red" message="de React"/>
    </div>
  );
}

export default App;

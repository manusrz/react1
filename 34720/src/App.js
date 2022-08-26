
import './App.css';
import NavReactBoost from './components/NavReactBoost';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const saludo = "bienvenidos!"
  return (
    <>
       <NavReactBoost/>
       <ItemListContainer  greeting="bienvenidos!" />
    </>
  )
}

export default App

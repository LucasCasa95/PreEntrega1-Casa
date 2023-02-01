import './App.css';
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer'; 

function App() {
  return (
    <>
    <Navbar nombre={"Huellitas"}/>
    <ItemListContainer greeting={29}/>
    </>
  );
}

export default App;
import Header from "./component/Header";
import Cards from "./component/Cards"
import {Routes, Route} from 'react-router-dom';
import AddMovie from "./component/AddMovie";

function App() {
  return (
    <div className="App">
     <Header/>

     <Routes>

      <Route path="/" element={<Cards/>} />
      <Route path='add' element={<AddMovie/>}/>

     </Routes>
    </div>
  );
}

export default App;

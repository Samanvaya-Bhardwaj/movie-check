import Header from "./component/Header";
import Cards from "./component/Cards"
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>

     <Routes>

      <Route path="/" element={<Cards/>} />
      
     </Routes>
    </div>
  );
}

export default App;

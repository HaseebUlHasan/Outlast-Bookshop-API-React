import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetail from "./BookDetail"
import ListsofBooks from './ListsofBooks';


function App() {
  return (
    <div >
     <BrowserRouter>
      <Routes>
           <Route path="/" element={<ListsofBooks />} /> 
          <Route path="/BookDetail/:id" element={<BookDetail />} />
          
      </Routes>
    </BrowserRouter>

    </div>
  );
}



export default App;

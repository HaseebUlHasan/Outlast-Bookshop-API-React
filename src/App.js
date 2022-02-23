import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ListsOfBook from "./ListsofBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookDetail from "./BookDetail"

function App() {
  return (
    <div >
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<ListsOfBook />} />
          <Route path="/BookDetail/:id" element={<BookDetail />} />
          
      </Routes>
    </BrowserRouter>

    </div>
  );
}



export default App;

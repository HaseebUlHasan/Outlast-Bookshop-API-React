import React, {useEffect,useState} from 'react'
 import { Button } from 'react-bootstrap';
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import Container from './Container';


function ListsOfBook() {
 const [books, setBooks] = useState([]);
 const [showBooks, setshowBooks] = useState(4);


        
 useEffect(() => {
    fetch("https://gutendex.com/books?id")
    .then(res => res.json())
    .then(data => setBooks(data.results, "data"))
 },[])

  

  const loadMore = () => {
    setshowBooks(showBooks + 4);
  };
  const loadLess = () => {
    setshowBooks(showBooks - 4);
  };

  return (

      <div >
       <Navbar/> 
       <Container />
       <div className='user'>
       {books.slice(0, showBooks).map((book) => {
       return(
        <div key= {book.id}>
          {console.log(book , "hhsggv")}
          <div style={{width:"300px" , marginTop:"50px"}}>
            <Link to = {`/BookDetail/${book.id}`}>
             <img src={book.formats["image/jpeg"]} 
             style={{width:"200px" , height:"300px"}}
             /> </Link>
              <hr />
              </div>
        </div>
       )})}
       </div> 


         <div style={{margin:"150px" }} >
            <Button  className= "btn btn-primary" onClick={loadMore} >Load More</Button>
            <Button  className= "btn btn-primary mx-5" onClick={loadLess} >Load Less</Button></div>    
    </div>
  
  )
}
export default ListsOfBook;

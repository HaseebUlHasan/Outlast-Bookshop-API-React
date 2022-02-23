import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const BookDetail = () => {
    const [singleBook, setSingleBook] = useState([])
    const {id} = useParams();
        console.log(id , "id")
    useEffect(() => {
        fetch(`https://gutendex.com/books?ids=${id}`)
        .then(res => res.json())
        .then(data => setSingleBook(data.results[0], "data"))
    }, [])

    console.log(id , "xhvc")
  return (
    <div style={{margin:"70px" , marginLeft:"600px"}}>
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={singleBook.formats && singleBook.formats["image/jpeg"]} />
      <Card.Body>
       <Card.Text>
       <h3> Title</h3>
       {singleBook.title}
       <h3> Authors </h3>
       {singleBook.authors && singleBook.authors.length > 0 && singleBook.authors[0].name}
    </Card.Text>
  
  </Card.Body>
</Card>
    </div>
  )
}
export default BookDetail;
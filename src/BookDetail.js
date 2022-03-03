import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import Navbar from "./Navbar";

const BookDetail = () => {
  const [singleBook, setSingleBook] = useState([]);
  const { id } = useParams();
  console.log(id, "id");
  useEffect(() => {
    fetch(`https://gutendex.com/books?ids=${id}`)
      .then((res) => res.json())
      .then((data) => setSingleBook(data.results[0], "data"));
  }, []);

  console.log(id, "xhvc");
  return (
    <>
      <Navbar />
      {/* <div style={{ margin: "30px", marginLeft: "600px" }}>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={singleBook.formats && singleBook.formats["image/jpeg"]}
        />
        <Card.Body>
          <Card.Text>
            <h3> Title</h3>
            {singleBook.title}
            <h3> Author </h3>

            {singleBook.authors &&
              singleBook.authors.length > 0 &&
              singleBook.authors.map((n) => {
                return (
                  <>
                    <p> {n.name} </p>
                    <p>
                      {n.birth_year} - {n.death_year}
                    </p>
                  </>
                );
              })}

            <h3> Bookshelves </h3>
            <ul>
              <li>
        
                {singleBook.authors &&
                  singleBook.bookshelves.length > 0 &&
                  singleBook.bookshelves[0]}{" "}
              </li>

              <li>
               
                {singleBook.authors &&
                  singleBook.bookshelves.length > 0 &&
                  singleBook.bookshelves[1]}{" "}
              </li>

              <li>
              
                {singleBook.authors &&
                  singleBook.bookshelves.length > 0 &&
                  singleBook.bookshelves[2]}{" "}
              </li>
            </ul>
            <h3> Media Type</h3>
            {singleBook.media_type}
            
            <h3>Language</h3>
            {singleBook.languages &&
              singleBook.languages.length > 0 &&
              singleBook.languages[0]}
          </Card.Text>
        </Card.Body>
      </Card>
    </div> */}

      <div className="float-container">
        <div className="float-child">
          <img
            src={singleBook.formats && singleBook.formats["image/jpeg"]}
            alt=" Front Pic"
            style={{ width: "550px", height: "550px", paddingLeft: "150px" }}
          />
        </div>

        <div className="float-child" style={{marginTop:"50px"}}>
          <h3> Title</h3>
          {singleBook.title}
          <h3> Author </h3>

          {singleBook.authors &&
            singleBook.authors.length > 0 &&
            singleBook.authors.map((n) => {
              return (
                <>
                  <p> {n.name} </p>
                  ({n.birth_year} - {n.death_year})
                </>
              );
            })}

          <h3> Bookshelves </h3>
          <ul style={{ listStyleType: "none" }}>
            <li>
              {singleBook.authors &&
                singleBook.bookshelves.length > 0 &&
                singleBook.bookshelves[0]}{" "}
            </li>

            <li>
              {singleBook.authors &&
                singleBook.bookshelves.length > 0 &&
                singleBook.bookshelves[1]}{" "}
            </li>

            <li>
              {singleBook.authors &&
                singleBook.bookshelves.length > 0 &&
                singleBook.bookshelves[2]}{" "}
            </li>
          </ul>
          <h3> Media Type</h3>
          {singleBook.media_type}

          <h3>Language</h3>
          {singleBook.languages &&
            singleBook.languages.length > 0 &&
            singleBook.languages[0]}
        </div>
      </div>
    </>
  );
};
export default BookDetail;

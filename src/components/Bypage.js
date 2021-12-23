import React, { useState, useEffect } from "react";
import Axios from "axios";

import { random, commerce } from 'faker';
import { Container, Col, Row } from "reactstrap";
import CartItem from "./Cartitem";


const apiKey = "INSET_YOUR KEY_HERE";

// const url = "https//api.................."
const localurl = "http://myjson.dit.upm.es/api/bins/885f";



const Bypage = ({ addInCart }) => {

  const [product, setProduct] = useState([]);


  // const fetchPhotos = async () =>{
  //     const response  = await Axios.get(url, {
  //         header: {
  //             Authorization:apiKey
  //         }
  //     });
  // }
  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl);


    const { photos } = data;
    const allProduct = photos.map(photo => ({
      smallImage: photo.src.medium,
      tinImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid()
    }))

    setProduct(allProduct);
  };



  useEffect(() => {
    fetchPhotos();

  }, []);

  return (

    <Container fluid>
      <h1 className="text-success text-center">
        Buy Page
      </h1>
      <Row >
        {product.map(product => (
          <Col md={4} key={product.id} >
            <CartItem product={product} addInCart={addInCart} />

          </Col>
        ))}

      </Row>

    </Container>

  )


}

export default Bypage;


// url=http://myjson.dit.upm.es/api/bins/885f
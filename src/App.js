import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// mistake
// import { toast, toastContainer } from "bootstrap";
// import { Toast } from "reactstrap";


import { ToastContainer, toast } from "react-toastify";
import { Container, Row, Col } from "reactstrap";
import Bypage from "./components/Bypage";
import Cart from "./components/Cart";

function App() {

  const [cartItem, setCartitem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id
    })
    if (isAlreadyAdded !== -1) {
      toast("already added in cart", {
        type: "error"
      })
      return;
    }
    setCartitem([...cartItem, item])

  };

  const buyNow = () => {

    setCartitem([]);
    toast("Purchase Complete", {
      type: "success"
    });

  };
  const removeItem = item => {
    setCartitem(cartItem.filter(singleItem => singleItem.id !== item.id));

  };



  return (
    // <div className="App">
    //   <Bypage addInCart={addInCart} />
    // </div>
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <Bypage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>

      </Row>

    </Container>

  );
}

export default App;

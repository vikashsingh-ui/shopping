import React from "react";
import {
    Container, ListGroup, ListGroupItem,
    Button, CardBody, Card, CardHeader, CardFooter, Col, Row
} from "reactstrap";
import CartItem from "./Cartitem";

const Cart = ({ cartItem, removeItem, buyNow }) => {
    let amount = 0;

    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)

    })
    return (

        <Container fluid>
            <h1 className="text-success">Your Cart List</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img
                                    height={80} src={item.tinImage}

                                />

                            </Col>
                            <Col className="text-center">

                                <div className="text-primary">{item.productName}</div>
                                <span> Price ($):- {item.productPrice}</span>

                                <Button color="danger" onClick={() => removeItem(item)} >Remove</Button>

                            </Col>
                        </Row>

                    </ListGroupItem>

                ))}

            </ListGroup>
            {/* if everything is empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>Grand Total</CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} product is {amount}

                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}> Pay Here</Button>

                        </CardFooter>
                    </Card>

                ) : (
                    <h2 className="text-warning"> Your Cart is Empty 🗃️ 🤑</h2>

                )


            }


        </Container>

    )


}
export default Cart;
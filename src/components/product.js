import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Product({ products, addToCart }) {
  const [selectedColors, setSelectedColors] = useState({});

  // Handle color selection for each product
  const handleSelectColor = (productId, color) => {
    setSelectedColors((prevState) => ({
      ...prevState,
      [productId]: color,
    }));
  };

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} xl={4} className="mb-4">
            <Card className="h-100 d-flex flex-column">
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>
                  {product.title}
                  {selectedColors[product.id] && (
                    <p>
                      <strong>Selected Color: {selectedColors[product.id]}</strong>
                    </p>
                  )}
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>R{product.price}</strong>
                </Card.Text>
                {/* Dropdown for color selection */}
                <DropdownButton
                  id={`dropdown-${product.id}`}
                  title={selectedColors[product.id] || "Select Color"}
                  onSelect={(e) => handleSelectColor(product.id, e)}
                >
                  {product.colors.map((color, index) => (
                    <Dropdown.Item key={index} eventKey={color}>
                      {color}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                {/* Button to add product to cart */}
                <Button
                  variant="primary"
                  className="mt-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;

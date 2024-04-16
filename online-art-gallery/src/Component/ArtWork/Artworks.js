import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Avatar, Row, Col, Button } from 'antd';

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      console.log('Fetching artworks...');
      const response = await axios.get('../artists.json');
      setArtworks(response.data);
    };
    fetchArtworks(); 
  }, []);

  const addToCart = (artwork) => {
    setCart([...cart, artwork]);
  };

  return (
    <div>
      <Row gutter={[16, 16]}>
        {artworks.map((artwork) => (
          <Col key={artwork.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={artwork.name} src={artwork.art} />}
            >
              <Card.Meta
                avatar={<Avatar src={artwork.avatar} />}
                title={artwork.name}
                description={artwork.description}
                extra={
                  <div>
                    <Button type="primary">Buy Now</Button>
                    <Button onClick={() => addToCart(artwork)}>Add to Cart</Button>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Row gutter={[16, 16]}>
        {cart.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={item.name} src={item.art} />}
            >
              <Card.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.name}
                description={item.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Artworks;
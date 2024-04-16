import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Avatar, Row, Col } from 'antd';

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await axios.get('./artists.json');
      setArtworks(response.data);
    };

    fetchArtworks();
  }, []);

  return (
    <div>
      <h2>All Artworks</h2>
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
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Artworks;
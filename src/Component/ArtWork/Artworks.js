import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Avatar, Row, Col, Button, Input } from 'antd';
import { ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons'; // Import icons

const { Search } = Input; // Destructure the Search component from antd

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [filteredArtworks, setFilteredArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await axios.get('./artists.json');
      setArtworks(response.data);
      setFilteredArtworks(response.data); // Initialize filteredArtworks with all artworks
    };

    fetchArtworks();
  }, []);

  const handleSearch = (searchText) => {
    const filtered = artworks.filter((artwork) =>
      artwork.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredArtworks(filtered);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Add the styled Search component here */}
      <Search
        placeholder="Search artworks..."
        onSearch={handleSearch}
        style={{ width: '300px', marginBottom: '16px' }} // Set width and margin bottom
      />

      <Row gutter={[16, 16]}>
        {filteredArtworks.map((artwork) => (
          <Col key={artwork.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={artwork.name} src={artwork.art} />}
              actions={[
                <div>
                  <Button icon={<ShoppingCartOutlined />} key="addToCart">Add</Button>
                </div>,
                <div>
                  <Button icon={<ShoppingOutlined />} key="buyNow">Buy Now</Button>
                </div>
              ]}
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

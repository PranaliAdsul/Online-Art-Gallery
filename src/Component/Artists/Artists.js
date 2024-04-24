import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col, Input } from 'antd'; // Import Input component from antd for search bar
import { SearchOutlined } from '@ant-design/icons'; // Import search icon from antd

const { Search } = Input; // Destructure the Search component from antd

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const response = await axios.get('/artists.json');
      setArtists(response.data);
      setFilteredArtists(response.data); // Initialize filteredArtists with all artists
    };

    fetchArtists();
  }, []);

  const handleSearch = (searchText) => {
    const filtered = artists.filter((artist) =>
      artist.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredArtists(filtered);
  };

  return (
    <div style={{ textAlign: 'center' }}> {/* Center the search bar */}
      {/* Add the styled Search component here */}
      <Search
        placeholder="Search artists..."
        onSearch={handleSearch}
        style={{ marginBottom: '16px', width: '300px', display: 'inline-block' }} // Set width and margin bottom
        prefix={<SearchOutlined style={{ color: '#1890ff' }} />} // Add search icon with custom color
      />

      <Row gutter={[16, 16]} justify="center">
        {filteredArtists.map((artist) => (
          <Col key={artist.id} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/artists/${artist.id}`}>
              <Card
                hoverable
                cover={<img alt={artist.name} src={artist.avatar} />}
              >
                <Card.Meta title={artist.name} description={artist.bio} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Artists;

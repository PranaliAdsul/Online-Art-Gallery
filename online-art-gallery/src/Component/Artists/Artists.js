import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col,Button } from 'antd';

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      const response = await axios.get('/artists.json');
      setArtists(response.data);
    };

    fetchArtists();
  }, []);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {artists.map((artist) => (
          <Col key={artist.id} xs={24} sm={12} md={8} lg={6}>
            <Link to={`/artists/${artist.id}`}>
              <Card
                hoverable
                cover={<img alt={artist.name} src={artist.image_url} />}
              >
                <Card.Meta title={artist.name} description={artist.bio} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Link to="/artists/add">
        <Button type="primary">Add Artist</Button>
      </Link>
    </div>
  );
};

export default Artists;
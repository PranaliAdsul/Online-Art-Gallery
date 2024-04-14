import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './home.css'; // Import CSS file
import 'animate.css/animate.min.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="jumbotron jumbotron-fluid home-jumbotron">
        <div className="container">
          <h1 className="display-4">Welcome to ArtWaves</h1>
          <p className="lead">
            Our gallery features virtual galleries and facilitates interaction between artists and buyers.
          </p>
          <div className="cta-button">
            <Link to="/artworks">
              <Button type="primary" size="large">Explore Artworks</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

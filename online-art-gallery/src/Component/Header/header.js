import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, TeamOutlined, ShoppingCartOutlined } from '@ant-design/icons'; 
import SearchBar from '../Search/Search.js'; // Import the SearchBar component
import './header.css'; // Import the CSS file

const Header = () => {
  const { SubMenu } = Menu;
    // Define the handleSearch function to handle search
    const handleSearch = (searchText) => {
      // Add your search functionality here
      console.log('Search Text:', searchText);
    };

  return (
    <div className="header">
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            <HomeOutlined />
            Home
          </Link>
        </Menu.Item>
        <SubMenu title={<span><AppstoreOutlined /><span>Artworks</span></span>}>
          <Menu.Item key="artworks">
            <Link to="/artworks">All Artworks</Link>
          </Menu.Item>
          <Menu.Item key="add-artwork">
            <Link to="/artworks/add">Add Artwork</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu title={<span><TeamOutlined /><span>Artists</span></span>}>
          <Menu.Item key="artists">
            <Link to="/artists">All Artists</Link>
          </Menu.Item>
          <Menu.Item key="add-artist">
            <Link to="/artists/add">Add Artist</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="search">
          <SearchBar handleSearch={handleSearch} />
        </Menu.Item>
        <Menu.Item key="cart">
          <Link to="/cart">
            <ShoppingCartOutlined />
            Cart
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;

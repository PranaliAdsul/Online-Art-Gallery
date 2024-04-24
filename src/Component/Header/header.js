import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, TeamOutlined, ShoppingCartOutlined } from '@ant-design/icons'; 
import logo from '../Asset/artwave-logo.png'; // Import your logo image file
import './header.css'; // Import the CSS file

const Header = () => {
  const { SubMenu } = Menu;

  return (
    <div>
      <div className="logo-container">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
      </div>
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
            {/* <Menu.Item key="add-artist">
              <Link to="/artists/add">Add Artist</Link>
            </Menu.Item> */}
          </SubMenu>
          <Menu.Item key="cart">
            <Link to="/cart">
              <ShoppingCartOutlined />
              Cart
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Header;

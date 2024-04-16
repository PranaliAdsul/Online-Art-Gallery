import React from 'react';
import { Input } from 'antd';
import './Search.css'; 

const { Search } = Input;

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-container">
  <Search
    className="search-input"
    placeholder="Search"
    onSearch={onSearch}
  />
</div>

  );
};

export default SearchBar;

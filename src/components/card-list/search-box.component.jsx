import React from 'react';

import "./search-box.component.css";

export const SearchBox = ({ handleChange, placeholder }) => (

    <input
        onChange={handleChange}
        className="search-box"
        type="Search"
        placeholder={placeholder} />
);
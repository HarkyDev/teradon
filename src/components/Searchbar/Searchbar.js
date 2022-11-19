import React from 'react'
import { useState } from "react";
import { Button } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import InputUnstyled from "@mui/base/InputUnstyled";
import './index.css'


const Searchbar = ({setSearchQuery}) => (
    <div className='rightSearch'>
    <SearchIcon className="searchIconBar"/>
        <input className='searchInput'></input>
    </div>
);
export default Searchbar
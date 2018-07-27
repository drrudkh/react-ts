import React from 'react';

import ShoppingCart from '../../containers/ShoppingCart/ShoppingCart';
import SearchBar from '../../containers/SearchBar/SearchBar';
import './_header.scss';

const Header: React.SFC = () => {
    return (
        <header className="header">
            <a href="#" className="logo">Book Webstore</a>
            <SearchBar />
            <ShoppingCart />
        </header>
    )
}

export default Header;


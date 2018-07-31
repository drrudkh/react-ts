import React from 'react';

import Cart from '../../containers/Cart/Cart';
import SearchBar from '../../containers/SearchBar/SearchBar';
import './_header.scss';

const Header: React.SFC = () => {
    return (
        <header className="header">
            <a href="#" className="logo">Book Webstore</a>
            <SearchBar />
            <Cart />
        </header>
    )
}

export default Header;


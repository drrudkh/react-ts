import React from 'react';

import ShoppingCart from '../../containers/ShoppingCart/ShoppingCart';
import './_header.scss';

const Header: React.SFC = () => {
    return (
        <header className="header">
            <a href="#" className="logo">Book Webstore</a>
            <ShoppingCart />
        </header>
    )
}

export default Header;
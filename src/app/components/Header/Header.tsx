import React from 'react';

import Cart from '../../containers/Cart/Cart';
import './_header.scss';

const Header: React.SFC = () => {
    return (
        <header className="header">
            <a href="#" className="logo">Book Webstore</a>
            <Cart />
        </header>
    )
}

export default Header;


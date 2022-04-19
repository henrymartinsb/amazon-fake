import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
  return (
    <nav className="header">

        {/* logo na esquerda -> img */}
        <Link to="/">
            <img className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt=""/>
        </Link>

        {/* 1 link */}
        <RoomRoundedIcon fontSize='medium !important' className="header__locIcon"/>
        <div className="header__Nav1">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Select your address</span>
          </div>
        </Link>
        </div>
        {/* barra de pesquisa */}
        <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
        </div>
        {/* links */}
        <div className="header__nav">
        {/* link 1 */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, Sign in</span>
            <span className="header__optionLineTwo">Accounts & Lists</span>
          </div>
        </Link>

        {/* link 2 */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* link 3 */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Icone de cesta de compras */}
            <ShoppingBasketIcon />
            {/* Numero de itens na cesta */}
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>

        </div>

        {/* icone de cesta de compra com numero */}
    </nav>
  )
}

export default Header
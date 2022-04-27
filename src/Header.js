import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import { auth } from "./firebase";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  
  /*const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }*/

  return (
    <nav className="header">
      
        {/* logo na esquerda -> img */}
        <Link to="/">
            <img className="header__logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt=""/>
        </Link>
        
        {/* 1 link */}
        <RoomRoundedIcon fontSize='large !important' className="header__locIcon"/>
        <div className="header__Nav1">
        <Link to="" className="header__link">
          <div id="mobileoffaddress" className="header__option">
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

        <div className="alinhar__logincesta">
        {/* logo na esquerda mobile */}
        <Link to="/">
            <img className="header__logomobile" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt=""/>
        </Link>
        <div className= "align__loginbasket2">  
          {/* login mobile */}
          <Link to="/login" className="header__link">
            <div id="header__loginmobile" className="header__option">
              <span className="header__optionLineOne"><AccountCircleIcon color='white !important' /></span>
            </div>
          </Link>
          {/* cesta de compras mobile */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasketmobile">
              {/* Icone de cesta de compras */}
              <ShoppingBasketIcon />
              {/* Numero de itens na cesta */}
              <span className="header__optionLineTwo header__basketCountmobile">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>  
        </div>
        

        {/* barra de pesquisa mobile */}
        <div className="header__searchmobile">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
        </div>

        {/* links */}
        <div className="header__nav">
        
        {/* link 1 */}
        <Link to="/login" className="header__link">
          <div id="mobileretire" className="header__option">
            <span className="header__optionLineOne">Hello, Sign in</span>
            <span className="header__optionLineTwo">Accounts & Lists</span>
          </div>
        </Link>

        {/* link 2 */}
        <Link to="" className="header__link">
          <div id="mobileretireRO" className="header__option">
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
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>

        </div>

        {/* icone de cesta de compra com numero */}
    </nav>
    
  )
}

export default Header;
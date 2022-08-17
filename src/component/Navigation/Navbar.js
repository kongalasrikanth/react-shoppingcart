import React from 'react';
import { NavLink } from "react-router-dom";
import '../../Style/Navbar.scss';
import logo from './../../Images/logo.jpeg';
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const categories = [
  
    
    {
        filter: "men's clothing",
        displayName: 'Men'
    },
    {
        filter: "women's clothing",
        displayName: 'Women'
    },
    {
        filter: "jewelery",
        displayName: 'jewelery'
    }, {
        filter: "electronics",
        displayName: 'Accessories'
    },
]
const Navbar = ({ setCategory, selectedCategory, ...props }) => {
    return (
        <React.Fragment>
            <div  >


                <nav className="navbar">
                    <div className="navbar-container container">
                        <input type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                        <NavLink className="logo" to="/"> <img width={100} src={logo} /></NavLink>
                        <ul className="menu-items">
                            <li className="nav-link"><a href="/">Home</a></li>
                            {
                                categories?.map((category, i) =>

                                    <li key={i} className={`nav-link ${category.filter === selectedCategory ? 'active' : ''} `} aria-current="page" onClick={() => setCategory(category.filter)}><a >{category.displayName}</a>
                                    </li>

                                )
                            }
                        </ul>
                        <NavLink to="/cart" className="cart"> <FiShoppingBag />
                            {' '}
                            {props.countCartItems ? (
                                <span className='badge badge-warning' id='lblCartCount'> {props.countCartItems} </span>
                            ) : (
                                ''
                            )}
                        </NavLink>{' '}

                    </div>
                </nav>
            </div>

        </React.Fragment>
    )
}

export default Navbar
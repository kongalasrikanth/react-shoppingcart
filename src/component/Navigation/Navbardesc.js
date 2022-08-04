import React from 'react'
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const categories = [{
    filter: "women's clothing",
    displayName: 'Women'
},
{
    filter: "men's clothing",
    displayName: 'Men'
}, {
    filter: "jewelery",
    displayName: 'Smart Gear'
}, {
    filter: "electronics",
    displayName: 'Accessories'
},
]
const Navbardesc = ({ setCategory, selectedCategory, ...props }) => {
    return (
        <div className='navbar-one-one'>
            <div className="navbar">
                <div className="nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="toggle">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="logo">

                        <div className='veniaicon'>
                            <h1><NavLink to="/">VENIA</NavLink></h1>

                        </div>
                        
                        <NavLink to="/" className="searchicicon" >< FiShoppingBag /></NavLink>
                        <NavLink to="/cart" className="cart">
                            {' '}
                            {props.countCartItems ? (
                                <p className="btn">{props.countCartItems}</p>
                            ) : (
                                ''
                            )}
                        </NavLink>{' '}
                    </div>
                    <div className="menubar">
                        <ul className="">
                            {
                                categories?.map((category, i) =>
                                    <li key={i} className={`nav-link ${category.filter === selectedCategory ? 'active' : ''} `} aria-current="page" onClick={() => setCategory(category.filter)}>{category.displayName}
                                    </li>
                                )
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbardesc

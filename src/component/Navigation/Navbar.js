import React from 'react';
import { NavLink } from "react-router-dom";
import '../../Style/Navbar.scss';
import logo from './../../Images/logo.jpeg';
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const categories = [
    {
        displayName: 'Home',
    },
    {
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
const Navbar = ({ setCategory, selectedCategory, ...props }) => {
    return (
        <React.Fragment>
            <div  >
                {/* <nav className="navbar navbar-expand-sm bg-#1f39ff navbar-dark py-3 shadow-sm">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/"><img width={100} src={logo} /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                                <li className='nav-link'><a href='/'>Home</a></li>
                                {
                                    categories?.map((category, i) =>

                                        <li key={i} className={`nav-link ${category.filter === selectedCategory ? 'active' : ''} `} aria-current="page" onClick={() => setCategory(category.filter)}>{category.displayName}
                                        </li>

                                    )
                                }
                            </ul>
                            <div className="buttons">
                                <NavLink to="/cart" className="cart"> <FiShoppingBag />
                                    {' '}
                                    {props.countCartItems ? (
                                        <span className='badge badge-warning' id='lblCartCount'> {props.countCartItems} </span>
                                    ) : (
                                        ''
                                    )}
                                </NavLink>{' '}
                            </div>
                        </div>
                    </div>
                </nav> */}



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
                            {/* <li><a href="#">Home</a></li> */}
                            {
                                categories?.map((category, i) =>

                                    <li key={i} className={`nav-link ${category.filter === selectedCategory ? 'active' : ''} `} aria-current="page" onClick={() => setCategory(category.filter)}>{category.displayName}
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
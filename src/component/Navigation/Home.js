import React from 'react';
import { Slide } from 'react-slideshow-image';
import { NavLink } from 'react-router-dom';
import menshero from '../../Images/legging.png';
import map from '../../Images/map-pin.svg';
import bottombanner from '../../Images/adventure.jpg';
import slider from '../../Images/slider.jpeg';
import { Link } from 'react-router-dom';
import '../../Style/Home.scss';
import 'react-slideshow-image/dist/styles.css';

export default function Home({ name, title }) {
    // const slideImages = [
    //     {
    //         url: 'https://i.ibb.co/rmWMYvk/Carousel-image.jpg',
    //     },
    //     {
    //         url: 'https://i.ibb.co/rmWMYvk/Carousel-image.jpg',

    //     },
    //     {
    //         url: 'https://i.ibb.co/rmWMYvk/Carousel-image.jpg',
    //     },
    // ];


    const properties = {
        prevArrow: <span className='buttonStyleleft' ></span>,
        nextArrow: <span className='buttonStyleright'></span>
    }
    return (
        <React.Fragment>
            <div>
                <div className="aem-Grid  aem-Grid--12">
                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12'>
                        <div className="slider-desktop">
                            <Slide  {...properties} slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={false} responsive={[{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            }, {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }]}>
                                <div className='slider-1'>
                                    <h3>Shop the new <br />Signature Collection</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.
                                    </p><br />
                                    <button>SHOP NOW</button>
                                </div>
                                <div style={{
                                    height: "445px"
                                }}><img width="100%" src="https://i.ibb.co/fx96SjS/carousel-01-01.jpg" /></div>

                            </Slide>
                        </div>
                        <div className="slider-mobile">
                            <Slide  {...properties} slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={false} responsive={[{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }, {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }]}>

                                <div className="slider-2">
                                    <img width="100%" src={slider} />
                                    <div className="bg-slider">
                                        <h3>Shop the new <br />Signature Collection</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur <br /> Lobortis mattis aliquam faucibus purus.
                                        </p><br />
                                        <button>SHOP NOW</button>
                                    </div>
                                </div>

                            </Slide>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="aem-Grid aem-Grid--12 category-top">
                        <div className='aem-GridColumn aem-GridColumn--default--3  aem-GridColumn--phone--12'>
                            <div className="card">
                                <div className="img-container">
                                    <Link to="/women">
                                        <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt="product" className="card-img-top" />
                                    </Link>
                                </div>
                                <div className="card-footer1">
                                    <h5><NavLink to="/women">Shop Women</NavLink></h5>
                                    <p>
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--3  aem-GridColumn--phone--12'>
                            <div className="card">
                                <div className="img-container">
                                    <Link to="/men">
                                        <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' alt="product" className="card-img-top" />
                                    </Link>
                                </div>
                                <div className="card-footer1">
                                <h5><NavLink to="/men">Shop Men</NavLink></h5>
                                    <p>
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--3  aem-GridColumn--phone--12'>
                            <div className="card">
                                <div className="img-container">
                                    <Link to="/jewellery">
                                        <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="product" className="card-img-top" />
                                    </Link>
                                </div>
                                <div className="card-footer1">
                                <h5><NavLink to="/jewellery">Jewellery</NavLink></h5>
                                    <p>
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--3  aem-GridColumn--phone--12'>
                            <div className="card">
                                <div className="img-container">
                                    <Link to="/electronics">
                                        <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="product" className="card-img-top" />
                                    </Link>
                                </div>
                                <div className="card-footer1">
                                <h5><NavLink to="/electronics">Electronics</NavLink></h5>
                                    <p>
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="aem-Grid aem-Grid--12 desktop_view">
                        <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12'>
                            <div className='section3'>
                                <h2>Take off in the new <br />Signature Legging</h2>
                                <h4>Lorem Ipsum Dolor Tempor</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                                <div className='btn-flex'>
                                    <button className='custom-button'>SHOP COLLECTION</button>
                                    <button>SHOP NOW</button>

                                </div>
                                <span className="hr_lines">
                                    <hr />
                                </span>

                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
                            <img className='desktop_view_hero menshero' src={menshero} />
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className="aem-Grid aem-Grid--12 mobile_view">

                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                            <img className='menshero' src={menshero} />
                        </div>

                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                            <div className='section3'>
                                <h2>Take off in the new <br />Signature Legging</h2>
                                <h4>Lorem Ipsum Dolor Tempor</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                                <div className='btn-flex'>
                                    <button className='custom-button'>SHOP COLLECTION</button>
                                    <button>SHOP NOW</button>

                                </div>
                                <span className="hr_lines">
                                    <hr />
                                </span>

                            </div>
                        </div>
                    </div>
                </div>



                <div className='conqueradventure-desktoptext'>
                <div className="conqueradventure">
                    <div className='container'>
                        <div className="conquer">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--8">
                                    <div className="conquer-image">
                                        <img src={bottombanner} alt="women" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4">
                                    <div className="conquer-title">
                                        <h3>Conquer your next adventure</h3>
                                        <p>Lorem Ipsum Dolor Tempor</p>
                                        <button className='shop-btn'>SHOP DEVICES</button>
                                        <div className='conquer-navigate'>
                                                {/* <FiMapPin size={40} /> */}
                                                <img src={map} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='conqueradventure-mobiletext'>
                <div className="conqueradventure">
                    <div className='container'>
                        <div className="conquer">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--phone--12">
                                    <div className="conquer-image">
                                        <img src={bottombanner} alt="women" />
                                        <div className='conquer-navigate1'>
                                                {/* <FiMapPin size={30} /> */}
                                                <img src={map} />
                                        </div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--phone--12">

                                    <div className="conquer-title">
                                        <h3>Conquer your</h3>
                                        <p>Lorem Ipsum Dolor Tempor</p>
                                        <button className='shop-btn'>SHOP DEVICES</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

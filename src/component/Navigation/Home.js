import React from 'react';
import { Slide } from 'react-slideshow-image';
import { NavLink } from 'react-router-dom';
import menshero from '../../Images/legging.png';
import map from '../../Images/map-pin.svg';
import bottombanner from '../../Images/adventure.jpg';
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
                        {/* <Slide {...properties}>
                            {slideImages.map((slideImage, index) => (
                                <div className="each-slide" key={index}>
                                    <div className="aem-Grid  aem-Grid--12">
                                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                                            <div className='slider-div' >
                                                <h3>Shop the new <br />Signature Collection</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis<br /> aliquam faucibus purus.
                                                </p><br />
                                                <button>SHOP NOW</button>
                                            </div>

                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12'>
                                            <img className='slider-div1' src={slideImage.url} />

                                        </div>

                                    </div>
                                </div>
                            ))}
                        </Slide> */}




                        <Slide {...properties} slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={false} responsive={[{
                            breakpoint: 800,
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
                                width: "674px",
                                height: "445px"
                            }}><img width="100%" src="https://i.ibb.co/kqC8SsF/carousel-01-01.jpg" /></div>

                        </Slide>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--10 flex">
                    <div className='aem-GridColumn aem-GridColumn--default--2 background-grid aem-GridColumn--phone--12'>
                        <div className="card">
                            <div className="img-container">
                                <Link to="/Mens">
                                    <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt="product" className="card-img-top" />
                                </Link>
                            </div>
                            <div className="card-footer1">
                                <h5>Shop Women</h5>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--2 background-grid aem-GridColumn--phone--12'>
                        <div className="card">
                            <div className="img-container">
                                <Link to="/Mens">
                                    <img src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' alt="product" className="card-img-top" />
                                </Link>
                            </div>
                            <div className="card-footer1">
                                <h5>Shop Men</h5>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--2 background-grid aem-GridColumn--phone--12'>
                        <div className="card">
                            <div className="img-container">
                                <Link to="/Mens">
                                    <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="product" className="card-img-top" />
                                </Link>
                            </div>
                            <div className="card-footer1">
                                <h5>Jewellery</h5>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--2 background-grid aem-GridColumn--phone--12'>
                        <div className="card">
                            <div className="img-container">
                                <Link to="/Mens">
                                    <img src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" alt="product" className="card-img-top" />
                                </Link>
                            </div>
                            <div className="card-footer1">
                                <h5>Electronics</h5>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="aem-Grid aem-Grid--12 legging-flex desktop_view">
                    <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
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
                    <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12'>
                        <img className='desktop_view_hero menshero' src={menshero} />
                    </div>
                </div>




                <div className="aem-Grid aem-Grid--12 legging-flex mobile_view">

                    <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
                        <img className='menshero' src={menshero} />
                    </div>

                    <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
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



                <div className="hero_banner ">
                    <div className="aem-Grid aem-Grid--12 flex">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                            <div className="card-img"><img src={bottombanner} className="card-img-top1" alt="" /></div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div className="card-body1">
                                <h5 className="card-title1">Conquer your<br /> next adventure</h5>
                                <h6 className="card-h6">Lorem Ipsum Dolor Tempor</h6><br />
                                <button className='custom-button1'>SHOP DEVICES</button>
                                <div className="hr_line">
                                    <img width={20} src={map} />
                                    <div className='line'></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

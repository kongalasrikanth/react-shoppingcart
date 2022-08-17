import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import ReactPaginate from 'react-paginate';
// import heart from "../Images/heart.jpg";
// import "../Style/Products.scss"
import store from '../../redux/store';
// import '../Style/landing-page.scss'
import { getProductsdata } from '../../api/productsApi';
const itemsPerPage = 12;
const Products = ({ category }) => {
    console.log(category);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            await getProductsdata();
            if (componentMounted) {
                const productsdata = store.getState();
                const response = productsdata.allProducts.products;
                const activeIds = [1, 2, 3, 4, 5, 7, 9, 12, 15, 16, 17, 18, 19, 20]
                const finaldata = response.filter((item) => {
                    return activeIds.includes(item.id);
                });
                setData(finaldata);
                const data = finaldata;
                setFilter(data);
                console.log(data);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    useEffect(() => {
        if (category) {
            setFilter(data.filter((value) => value.category === category));
        }
    }, [category]);
    const ShowProducts = () => {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);
        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(filter.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(filter.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % filter.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };
        const [isChecked, setIsChecked] = useState({});
        const filterProduct = (event) => {
          const itemcategory = event.target.value
          console.log("category",event);
            const updateList = data.filter((x) => x.category === itemcategory);
            setFilter(updateList);
        }
        return (
            <>
            <div className="aem-GridColumn aem-GridColumn--default--3">
            <div className='container'>
                <div className='filters_1'>
                    <div className='filter'>
                        <h6>Filters</h6>
                    </div>
                    <hr />
                    <div className='attribute'>
                        <h6>Categories</h6>
                        <input type="checkbox" id="Jewellery" name="Jewellery" checked={isChecked} value="jewelery" onChange={filterProduct}/>&nbsp;
                        <label>Jewellery</label> <br />
                        <input type="checkbox" id="Electronics" name="Electronics" value="electronics" onChange={filterProduct}/>&nbsp;
                        <label>Electronics</label> <br />
                        <input type="checkbox" id="Mens" name="Mens" value="men's clothing" onChange={filterProduct}/>&nbsp;
                        <label>Men's Clothing</label> <br />
                        <input type="checkbox" id="Womens" name="Womens" value="women's clothing" onChange={filterProduct}/>&nbsp;
                        <label>Women's Clothing</label> <br />
                    </div>
                </div>
            </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-Grid aem-Grid--12 aem-Grid-default--9">
                        {currentItems?.map((product) => {
                            let backgroundImageURL = product.image;
                            const containerStyle = {
                                backgroundImage:
                                    `url(${backgroundImageURL})`
                            };
                            return (
                                <>
                                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 pd-32">
                                        <div className="Product_card landing" key={product.id}>
                                            <div className='product_image' style={containerStyle}>
                                            </div>
                                            <div className="card-bodydesc">
                                                < NavLink to={`/products/${product.id}`}>
                                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                                </NavLink>
                                                <p className="card-text lead">${product.price}</p>
                                                {/* <img src={heart} /> */}
                                            </div>
                                        </div>
                                        {/* <div className='landimg img1'>
                                        </div>
                                        <div className='card-desc'>
                                            <h3><Link to="/women">Shop Women</Link></h3>
                                            <p>Lorem ipsum dolor sit amet</p>
                                        </div> */}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
                </div>
            </>
        )
    }
    return (
        <div className='aem-Grid aem-Grid--12'>
          <ShowProducts />
        </div>
    )
}
export default Products
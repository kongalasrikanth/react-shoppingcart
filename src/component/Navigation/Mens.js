import React from 'react'
import Productlist from '../Products/Productlist';
import Filter from '../Products/Filter';
import Title from './Title';
import Breadcrumb from '../Products/Breadcrumb';

function Header({ category }) {
    return (
        <>
            <Title category={category}/>
            <div>
                <Breadcrumb />
            </div>
            <div className='container'>
                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Filter />
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                        <Productlist category={category} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header

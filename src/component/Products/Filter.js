import React from 'react'


function Filter() {
    return (
        <div className='container'>
            <div className='filters_1'>
                <div className='filter'>
                    <h6 className='filterbld'>Filters</h6>
                </div>
                <hr />
                <div className='attribute'>

                    <h6 className='filterbld'>Categories</h6>
                    <input type="checkbox" id="option" name="option" value="option" />&nbsp;
                    <label className='attributelabel'>Jewellery</label> <br />
                    <input type="checkbox" id="option" name="option" value="option" />&nbsp;
                    <label className='attributelabel'>Electronics</label> <br />
                    <input type="checkbox" id="option" name="option" value="option" />&nbsp;
                    <label className='arrtributelabel'>Men's Clothing</label> <br />
                    <input type="checkbox" id="option" name="option" value="option" />&nbsp;
                    <label className='attributelabel'>Women's Clothing</label> <br />
                </div>
            </div>
        </div>


    )
}

export default Filter

import React from 'react'
import facebook from '../../Images/facebook.png';
import instagram from '../../Images/instagram.png';
import twitter from '../../Images/twitter.png';
export default function Review() {
    return (
        <div className='container'>
            <div className='container-Checkout'>
                <h5 className='main-text'>Order Successful!</h5>
                <hr />
            </div>
            <h3 className='guesth3'>Order Number #1700834</h3>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
                    <div>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                                <h5 className='checkout_h5'>Shipping Information</h5>
                                <p className='checkout_1'>q_farhan@gmail.com <br />+1 (555) 229-3367<br /><br /><br />Qadim Farhan <br />1098 Wapello Street<br />Altadena, California 91001 <br /><p>United States</p></p>

                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                                <h5 className='checkout_h5'>Shipping Method</h5>
                                <p className='checkout_1'>Standard Shipping<br /> Est. delivery in 4 - 8 business days <br />FREE</p>
                                <h5 className='checkout_h5'>Payment Information</h5>
                                <p className='checkout_1'>Credit Card <br /> Visa ending in 4567</p>

                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12"></div>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--12 ">
                                <div className="card-success">
                                    <h3>Give us a follow to SAVE 20% on your next order.</h3>
                                    <div className="social-media-icons">
                                    <img src={instagram} height={40} width={40} />
                                    <img src={facebook} height={40} width={40} />
                                    <img src={twitter} height={40} width={40} />
                                    
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className='pay1'>
                <p>3. items in your order</p>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">

                    <div className='order'>
                        <img src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' className='iconDetails' />

                        <div className="text">
                            <h4>Mens Products</h4>
                            <p>Size: Medium</p>
                            <p>Color: Storm</p>
                            <p>Quantity: 2</p>
                        </div>
                    </div>
                </div >
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                <div className='order'>
                        <img src='https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg' className='iconDetails' />

                        <div className="text">
                            <h4>Womens Products</h4>
                            <p>Size: Medium</p>
                            <p>Color: Storm</p>
                            <p>Quantity: 2</p>
                        </div>
                    </div>
                </div >
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                    <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
               <br/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                </div>
            </div>
        </div>
    )
}

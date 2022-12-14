import React, { useEffect } from 'react'
import edit from '../../Images/edit-2.jpg';
import { Link } from 'react-router-dom';
export default function Guestcheckout({ setFooter1 }) {
  useEffect(() => {
    setFooter1(true);
  }, []);
  return (
    <>

      <div className='container'>
        <div className='container-Checkout'>
          <h5 className='main-text'>Checkout</h5>
          <hr />
        </div>

        <h3 className='guesth3'>Guest Checkout</h3>
        <div className="aem-Grid aem-Grid--12">

          <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
            <div className='checkout_2'>
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">

                  <h5 className='checkout_h5'>Shipping Information</h5>
                  <p className='checkout_1'>q_farhan@gmail.com <br />+1 (555) 229-3367</p>
                </div>


                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <div className='checkout_p'>
                    <p>Qadim Farhan </p>
                    <p> 1098 Wapello Street </p>
                    <p>Altadena, California 91001 </p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <p className='checkout_3 checkout3-desktop'><img alt="Veni'a_alt" width={20} src={edit} />Edit</p>
                  <p className='checkout_3 checkout3-mobile'><img alt="Venia_alt" width={20} src={edit} /></p>
                </div>
              </div>
            </div>
            <h6 className='checkout_4 shipping-text'>2. Shipping Method</h6>
            <div>
              <div className="label-flex">
                <input type="radio" id="html" value="HTML" />
                <label for="html">Standard Shipping <span style={{ fontWeight: 400 }}>(4-8 business days via USPS) FREE</span></label></div><br />
              <div className="label-flex">
                <input type="radio" id="html" value="HTML" />
                <label for="html">Express Delivery <span style={{ fontWeight: 400 }}>(2-5 business days via USPS) $17.95</span></label></div><br />
              <div className="label-flex">
                <input type="radio" id="html" value="HTML" />
                <label for="html">Next Day Delivery <span style={{ fontWeight: 400 }}>(Next business days via FedEx) $53.61</span></label></div><br />
              <button className='main-btn btn-shipping-1-desktop'><p><Link to="/Checkout3">CONTINUE TO PAYMENT</Link></p></button>
              <button className='main-btn btn-shipping-1-mobile'><p><Link to="/Checkout3">CONTINUE</Link></p></button>
              <h5 className="payment-text">
                <p>3. Payment Information</p>
              </h5>
            </div></div>
         
          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12"></div>
            <div className='pricing-card' >
              <h5 className="shipping-text">Pricing Summary</h5>
              <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 ">
                  <h6>Subtotal</h6>
                  <h6>Coupon</h6>
                  <h6>Gift Card</h6>
                  <h6>Estimated tax</h6>
                  <h6>Estimated shipping</h6>
                  <h6><strong>Estimated Total</strong></h6>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6  text-right">
                  <h6>$ 388.00</h6>
                  <h6>- $ 77.60</h6>
                  <h6>- $ 100.00</h6>
                  <h6>$ 23.28</h6>
                  <h6>FREE</h6>
                  <h6><strong>$ 233.68</strong></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

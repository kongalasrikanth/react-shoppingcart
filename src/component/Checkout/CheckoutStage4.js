import React,{useEffect} from 'react'
import edit from '../../Images/edit-2.jpg';
import{Link}from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Checkout4({ setFooter1 }) {
  useEffect(() => {
    setFooter1(true);
  }, []);
  return (
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
                <p className='checkout_3 checkout3-desktop'><img alt="Venia_alt" width={20} src={edit} />Edit</p>
                <p className='checkout_3 checkout3-mobile'><img alt="Venia_alt" width={20} src={edit} /></p>
              </div>
            </div>
          </div>
          <div>
            <div className='guest-2'>
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
                  <p className='checkout_3 checkout3-desktop'><img alt="Venia_alt" width={20} src={edit} />Edit</p>
                  <p className='checkout_3 checkout3-mobile'><img alt="Venia_alt" width={20} src={edit} /></p>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className='guest-2'>
              <div className="aem-Grid aem-Grid--12">

                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                  <h5 className='checkout_h5'>Payment Information</h5>
                  <p className='checkout_1'>Credit Card <br /> Visa ending in 4567</p>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">

                  <div className='checkout_p'>
                    {/* <p>Qadim Farhan </p>
                    <p> 1098 Wapello Street </p>
                    <p>Altadena, California 91001 </p>
                    <p>United States</p> */}
                  </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                  <p className='checkout_3 checkout3-desktop'><img alt="Venia_alt" width={20} src={edit} />Edit</p>
                  <p className='checkout_3 checkout3-mobile'><img alt="Venia_alt" width={20} src={edit} /></p>
                </div>
              </div>
            </div>
          </div>
          <div className='pay1'>
                <p>3. items in your order</p>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">

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
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
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
            </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
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
     
      <button className='main-btn review_btn'><p><Link to="/OrderSuccessful">PLACE ORDER</Link></p></button>
      <p className='stage4_p'>By clicking confirm order you agree to our <b>Terms and Conditions</b></p>
    </div>
  )
}

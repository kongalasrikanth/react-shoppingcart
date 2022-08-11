import {React,useEffect} from 'react'
import edit from '../../Images/edit-2.jpg';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Review({ setFooter1 }) {
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
                <p className='checkout_3 checkout3-mobile '><img alt="Venia_alt" width={20} src={edit} /> </p>
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
          <div className='pay1'>
        <p>3. Payment Information</p>
      </div>
      <input type="radio" id="html" value="HTML" />&nbsp;&nbsp;
      <label for="html">Credit Card</label><br />
      <div className="aem-Grid aem-Grid--12">
        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
          <Row className="mb-3">
          <div className="aem-Grid aem-Grid--12">
            <Form.Group className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12" controlId="formGridEmail">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            </div>
          </Row>
          <Row className="mb-3">
          <div className="aem-Grid aem-Grid--12">
            <Form.Group className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12" controlId="formGridEmail">
              <Form.Label>Credit Card Number</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            </div>
          </Row>
          <Row className="mb-3">
          <div className="aem-Grid aem-Grid--12">
            <Form.Group className="aem-GridColumn aem-GridColumn--default--8 mr-5 aem-GridColumn--phone--12" controlId="formGridCity">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12" controlId="formGridState">
              <Form.Label>CVV</Form.Label>
              <Form.Control />
            </Form.Group>
            </div>
          </Row>
          <input type="checkbox" id="html" value="HTML" />&nbsp;&nbsp;
      <label for="html">Billing address same as shipping address</label><br />
      <hr />
      <input type="radio" id="html" value="HTML" />&nbsp;&nbsp;
      <label for="html">Paypal</label><br />
      <hr />
        </div >
      </div>
      <button className='main-btn btn-shipping-1-desktop'><p><a href="/Checkout4">CONTINUE TO REVIEW ORDER</a></p></button>
      <button className='main-btn btn-shipping-1-mobile'><p><a href="/Checkout4">CONTINUE</a></p></button>
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
      
    </div>
  )
}

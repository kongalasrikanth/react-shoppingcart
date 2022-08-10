import { React, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function Checkout({ setFooter1 }) {
  useEffect(() => {
    setFooter1(true);
  }, []);
  return (
    <div className='container'>
      <div className='container-Checkout'>
        <h5 className='main-text'>Checkout</h5>
        <hr />
      </div>
      <div className="aem-Grid aem-Grid--12">
        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
          <div className='guestcheckout'>
            <h4>Guest Checkout</h4>
            <h5>Contact information</h5>
            <p>We’ll use these details to keep you informed on your delivery.</p>
          </div>
          <Form>
            <Row className="mb-3">
              <div className="aem-Grid aem-Grid--12">
                <Form.Group className="aem-GridColumn aem-GridColumn--default--5 mr-5 aem-GridColumn--phone--12" controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="abc@xyz.com" />
                </Form.Group>

                <Form.Group className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12" controlId="formGridPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="password" placeholder="(222) 222-2222" />
                </Form.Group>
              </div>
            </Row>
            <Row className="mb-4">
              <h2>1. Shipping Information</h2>
              <Form.Group className="aem-GridColumn aem-GridColumn--default--12 mr-5 aem-GridColumn--phone--12" controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <div className="aem-Grid aem-Grid--12">
                <Form.Group className="aem-GridColumn aem-GridColumn--default--5 mr-5 aem-GridColumn--phone--12" controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12" controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="aem-Grid aem-Grid--12">
                <Form.Group className="aem-GridColumn aem-GridColumn--default--5 mr-5 aem-GridColumn--phone--12" controlId="formGridEmail">
                  <Form.Label>Street Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12" controlId="formGridPassword">
                  <Form.Label>Street Address 2</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </div>
            </Row>




            <Row className="mb-3">
              <div className="aem-Grid aem-Grid--12">
                <Form.Group className="aem-GridColumn aem-GridColumn--default--5 mr-5 aem-GridColumn--phone--12" controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group className="aem-GridColumn aem-GridColumn--default--3 mr-5 aem-GridColumn--phone--12" controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>California</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12" controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="password" placeholder="91001" />

                </Form.Group>
              </div>
            </Row>

          </Form>
          <button className='btn-shipping-1 btn-shipping-1-desktop'><p><a href="/Checkout2">CONTINUE TO SHIPPING METHOD</a></p></button>
          <button className=' btn-shipping-1 btn-shipping-1-mobile'><p><a href="/Checkout2">CONTINUE</a></p></button>
          <Form>
            <Row className="mb-4">

              <hr />
              <h5 >
                <p>2. Shipping Method</p>
              </h5>
              <hr />
              <h5 >
                <p>3. Payment Information</p>
              </h5>
              <hr />
            </Row>
          </Form>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
          <div className='signin-check cartdetails'>
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6">
                <h5>Sign in for Express <br />Checkout</h5>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 ">
                <button className='signin-btn'><p>SIGN IN</p></button>
              </div>
            </div>
          </div>
          <div className='pricing-card cartdetails' >
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--6 ">
                <h6>Subtotal</h6>
                <h6>Coupon</h6>
                <h6>Gift Card</h6>
                <h6>Estimated tax</h6>
                <h6 className='h18'>Estimated shipping</h6>
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

  );
}

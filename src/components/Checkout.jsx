import React, { useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom'; 
import "../style/checkout.css"
const Checkout = () => {
    const navigate = useNavigate(); 
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true"); 
  
  const handlePayment = (e) => {
    e.preventDefault(); 

    if (isAuthenticated) {
      navigate("/recommended");
    } else {
      navigate("/signin");
    }
  };
  
  return (
    <div className='checkout'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Second product</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Third item</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>

            <form className="card p-2 ">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code"/>
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-8 order-md-1">
            <form className="needs-validation" noValidate>
              <div className="row">
                <h3>Contact</h3>
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">Email or Phone Number</label>
                  <input type="text" className="form-control" id="firstName" required />
                  <div className="invalid-feedback">
                  Email or Phone Number is required.
                  </div>
                </div>
              </div>


              <div className="row">
                <h3>Delivery</h3>
                <div className="col-md-5 mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" required />
                  <div className="invalid-feedback">
                  The first name is required.
                  </div>
                </div>
                <div className="col-md-5 mb-3">
                  <label htmlFor="firstName">Last name</label>
                  <input type="text" className="form-control" id="firstName" required />
                  <div className="invalid-feedback">
                  The last Name is required.
                  </div>
                </div>
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select className="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                    <option>Azerbaijan</option>
                    <option>Russia</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-5 mb-3">
                  <label htmlFor="state">State</label>
                  <select className="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                    <option>Baku</option>
                    <option>Moscow</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              </div>

              <h4 className="mb-3">Payment</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" placeholder="" required />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Expiration Date</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required />
                  <div className="invalid-feedback">
                    Expiration Date is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Security Code</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" required />
                  <div className="invalid-feedback">
                    Security Code
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handlePayment}>Pay now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

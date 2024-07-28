import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref = {ref} className="bg-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5>Contact Us</h5><br></br>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i> 1 Palmgrove Road, Victoria Layout,
                Bangalore - 560 047, Karnataka, India.
              </li>
              <li className="mb-2">
                <i className="fas fa-phone me-2"></i> +91-80-25301861
              </li>
              <li>
                <i className="fas fa-envelope me-2"></i> bpfound@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <h5>Follow Us</h5><br></br>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="https://www.facebook.com/bestpracticesfoundation" className="text-light text-decoration-none" >
                  <i className="fab fa-facebook-f me-2"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/BestPracFound" className="text-light text-decoration-none">
                  <i className="fab fa-twitter me-2"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-left mt-3">
          <p>&copy; 2024 Best Practices Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

import React from 'react';
import './Footer.css';

export const Footer = () => (
  <footer className="page-footer">

      <footer className="page-footer font-small blue pt-4 mt-4">

          <div className="container-fluid text-center text-md-left">
              <div className="row">


                  <div className="col-md-6">
                      <h5 className="text-uppercase">TLDR:Tech</h5>
                      <p>Footer stub</p>
                  </div>

                  <div className="col-md-6">
                      <h5 className="text-uppercase">Links</h5>
                      <ul className="list-unstyled">
                          <li>
                              <a href="https://www.facebook.com">Facebook</a>
                          </li>
                          <li>
                              <a href="https://www.twitter.com">Twitter</a>
                          </li>
                          <li>
                              <a href="https://www.github.com">Github</a>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>



          <div className="footer-copyright py-3 text-center">
              © 2018 Copyright:

          </div>


      </footer>

  </footer>
);

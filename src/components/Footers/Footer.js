/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  SYSCHO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.invisionapp.com?ref=creativetim"
              target="_blank"
            >
              Syscho
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nuk-pro-react-footer"
              target="_blank"
            >
              PACHA
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;

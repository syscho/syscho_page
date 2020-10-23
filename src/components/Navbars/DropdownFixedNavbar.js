import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
//ABOUT US NAVBAR
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";

function DropdownFixedNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="navbar-absolute navbar-transparent" expand="lg">
      <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              <p>
                <strong>SYSCHO HOMEPAGE</strong>
              </p>
            </NavbarBrand>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>
                    <strong>Components</strong>
                  </p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons design_image"></i>
                    Presentation
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-pro-react/#/documentation/introduction?ref=nuk-pro-react-scroll-transparent-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons design_image"
                  ></i>
                  <p>
                    <strong>Prototypes</strong>
                  </p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem tag={Link} to="/about-us">
                    <i className="now-ui-icons business_bulb-63"></i>
                    About-us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/hotel">
                    <i className="now-ui-icons text_align-left"></i>
                    Blog Post
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/blog-posts">
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contact-us">
                    <i className="now-ui-icons location_pin"></i>
                    Contact Us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/landing-page">
                    <i className="now-ui-icons education_paper"></i>
                    Landing Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/login-page">
                    <i className="now-ui-icons users_circle-08"></i>
                    Login Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/pricing">
                    <i className="now-ui-icons business_money-coins"></i>
                    Pricing
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/e-commerce">
                    <i className="now-ui-icons shopping_shop"></i>
                    Ecommerce Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/product-page">
                    <i className="now-ui-icons shopping_bag-16"></i>
                    Product Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="now-ui-icons users_single-02"></i>
                    Profile Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sign-up">
                    <i className="now-ui-icons tech_mobile"></i>
                    Signup Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link btn-default"
                  color="neutral"
                  target="#"
                >
                  <p><strong>Login</strong></p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DropdownFixedNavbar;

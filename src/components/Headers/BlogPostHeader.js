import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function BlogPostHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-mini">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg15.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Llegaron las vacaciones!!</h2>
              <h4>Nuestros servicios a su disposicion.</h4>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default BlogPostHeader;

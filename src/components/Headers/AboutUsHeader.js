import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";
import Formupload from "projects/gallery_project/upload/uploadImage";

// core components

function AboutUsHeader() {
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
            backgroundImage: "url(" + require("assets/img/bg32.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <h1 className="title">Save your moments.</h1>
            </Col>
          </Row>
          <Row>
            <Formupload />
          </Row>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;

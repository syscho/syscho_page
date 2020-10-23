import React from "react";
// react plugin used to create DropdownMenu for selecting items

// reactstrap components

// core components
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import Footer from "components/Footers/Footer.js";
import Gallery from "../../projects/gallery_project/gallerymain";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";

function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ScrollTransparentNavbar />
      <div className="wrapper">
        <AboutUsHeader />
        <Gallery/>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;

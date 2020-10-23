import React, { useState } from "react";
import RenderImage from "./upload/renderImage";
import Modal from "./upload/modal";

// core components

const Gallery = () => {
  const [image, setImage] = useState(null);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <div style={{backgroundColor:'#0b2228'}} class='container-fluid'>
        <RenderImage setSelectedImage={setImage} />
        {
        image && <Modal image={image} setSelectedImage={setImage} />}
      
    </div>
  );
};
export default Gallery;

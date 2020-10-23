import React from "react";

// reactstrap components
// core components

import '../../projects/hotel_project/hotel.css'
import MainHotel from "projects/hotel_project/main";

function BlogPost() {
  React.useEffect(() => {
    document.body.classList.add("blog-post");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <MainHotel/>
    </>
  );
}

export default BlogPost;

import React from "react";
import HotelNavBar from "components/Navbars/HotelNavBar";
import BlogPostHeader from "components/Headers/BlogPostHeader";
import FooterBlack from "components/Footers/FooterBlack";
import MainContent from "./main_section";
import Banner from "./banner";
import { Link } from "react-router-dom";
import SearchRooms from "./searchRooms";

export const Rooms = () => {
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
      <HotelNavBar />
      <div className="wrapper">
        <BlogPostHeader />
        <MainContent content="roomsContent">
          <Banner title="Our Rooms" subtitle="Cheeck our avaliable rooms">
            <Link
              to="/hotel"
              className="btn-banner-hotel"
              style={{ textDecoration: "none", alignContent: "center" }}
            >
              <strong>return home</strong>
            </Link>
          </Banner>
        </MainContent>
        <SearchRooms />
        <FooterBlack />
      </div>
    </>
  );
};

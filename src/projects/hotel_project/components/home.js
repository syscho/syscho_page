import React from "react";
import MainContent from "./main_section";
import HotelNavBar from "components/Navbars/HotelNavBar";
import BlogPostHeader from "components/Headers/BlogPostHeader";
import FooterBlack from "components/Footers/FooterBlack";
import Banner from "./banner";
import { Link } from "react-router-dom";
import Services from "./services";
import RoomsDatos from "./getDataContext";

export default function Home() {
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
        <MainContent>
          
          <Banner
            title="Luxurious Rooms"
            subtitle="Deluxe rooms starting at $20"
            >
            <Link
              to="/hotel/rooms"
              className="btn-banner-hotel"
              style={{ textDecoration: "none", alignContent:'center' }}
            >
              <strong>OUR rooms</strong>
              
            </Link>
          </Banner>
          
        </MainContent>
        <Services/>
        <RoomsDatos/>
        <FooterBlack />
      </div>
    </>
  );
}

import React from "react";
import { Container } from "reactstrap";
import defaultIMG from "../../../assets/img/bg1.jpg";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
export default function RoomsInfo({ room }) {
  //console.log(room);
  const { name, slug, images, price } = room;
  return (
    <Container>
      <article className="room">
        <div className="img-container">
          <img src={images[0] || defaultIMG} alt="Sl" />
          <div className="price-top">
            <h6>${price}</h6>
            <p style={{ fontFamily: "arial" }}>per nigth</p>
          </div>
          <Link
            to={`/hotel/rooms/${slug}`}
            className="btn-banner-hotel room-link"
          >
            Features
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    </Container>
  );
}
//save the values in propTypes sort by datatype
RoomsInfo.propTypes = {
  room: propTypes.shape({
    name: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    images: propTypes.arrayOf(propTypes.string).isRequired, //cuz images is a string
    price: propTypes.number.isRequired,
  }),
};

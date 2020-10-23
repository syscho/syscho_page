import React, { Component } from "react";
import BlogPostHeader from "components/Headers/BlogPostHeader";
import FooterBlack from "components/Footers/FooterBlack";
import { Context } from "../context";
import { Link } from "react-router-dom";
import Banner from "./banner";
import Styledbg from "./styledContent";

export default class SingleRoom extends Component {
  constructor(props) {
    //this props es recivied via REACTROUTER automatically
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug, //asignar el valor extraido a slug
    };
    //console.log(this.state.slug);
  }
  static contextType = Context;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <>
          <BlogPostHeader />
          <div className="error">
            <h3>No existe ese room</h3>
            <Link to={`/hotel/rooms`} className="btn-primary">
              Back
            </Link>
          </div>
        </>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultIMG] = images;
    console.log(defaultIMG);
    return (
      <>
        <BlogPostHeader />
        <Styledbg img={mainImg}>
          <Banner title={`${name} room`} subtitle="Room information">
            <Link
              to="/hotel/rooms"
              className="btn-banner-hotel"
              style={{ textDecoration: "none", alignContent: "center" }}
            >
              <strong>check another rooms</strong>
            </Link>
          </Banner>
        </Styledbg>
        <section className="single-room">
          <div className="single-room-images">
            {defaultIMG.map((image, key) => {
              return <img key={key} src={image} alt="img" />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price:${price}</h6>
              <h6>size:${size}</h6>
              <h6>
                max capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((value, key) => {
              return <li key={key}>-{value}</li>;
            })}
          </ul>
        </section>
        <FooterBlack />
      </>
    );
  }
}

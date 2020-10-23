import React, { Component } from "react";
import { Context } from "../context";
import LoadingIcon from "./loading_icon";
import { Title } from "./title";
import RoomsInfo from "./rooms_info";

export default class RoomsDatos extends Component {
  static contextType = Context;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <RoomsInfo key={room.id} room={room} />;
    });
    //console.log(featuredRooms) the value is recivied console.log(value+'ASDASD') maybe wont work
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <LoadingIcon /> : rooms}
        </div>
      </section>
    );
  }
}

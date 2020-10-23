import React from "react";
import RoomsInfo from "./rooms_info";

export default function Roomlist({ sortedRooms }) {
  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>No rooms found</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {sortedRooms.map((item) => {
          return <RoomsInfo key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}

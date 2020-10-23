import React, { useContext } from "react";
import { Context } from "../context";
import { Title } from "./title";

//get unique values we will use
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]; //Set() only saves inique values
};
export default function RoomFIlter() {
  const allvalues = useContext(Context);
  console.log(allvalues);
  //now i want to use all values from context, from where?
  const {
    handleChange,
    rooms,
    sortedRooms,
    featuredRooms,
    loading,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = allvalues; //from here
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  const optiontypes = types.map((item, key) => {
    return (
      <option className="" value={item} key={key}>
        {item}
      </option>
    );
  });
  let people = getUnique(rooms, "capacity");
  people = people.map((item, key) => {
    return (
      <option className="" value={item} key={key}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label>Room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-controll"
            onChange={handleChange}
          >
            {optiontypes}
          </select>
        </div>
        <div className="form-group">
          <label>Capacity</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-controll"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label>Room Price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-controll"
          />
        </div>
        <div className="form-group">
          <label>Room Size</label>
          <input
            type="number"
            name="minSize"
            id="size"
            value={minSize}
            onChange={handleChange}
            className="size-input"
          />
          <input
            type="number"
            name="maxSize"
            id="size"
            value={maxSize}
            onChange={handleChange}
            className="size-input"
          />
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label>breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label>pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}

import React, { Component } from "react";
import items from "./data";
const Context = React.createContext();

class DataProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  //how to get the data from a file
  componentDidMount() {
    let rooms = this.formatData(items);
    //console.log(rooms);
    //now I extract from the string every object who has in one of his values 'featured:true'
    let featuredRooms = rooms.filter((obj) => obj.featured === true);
    //console.log(featuredRooms);

    //getting the max values from the data file
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState(
      {
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        //refresh the values
        price: maxPrice,
        maxPrice,
        maxSize,
      },
      () => {
        //console.log(this.state.featuredRooms);//show the new data async
      }
    );
  }

  formatData(items) {
    let getItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      //time to merge the data into a string
      let room = { ...item.fields, images, id };
      return room; //return one item
    });
    return getItems; //return all items
  }

  getRoomsData = (slug) => {
    //getrooms recibe data from a call in single rooms, const { getRoom } = this.context;   const room = getRoom(this.state.slug);

    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  //define new value to filter the rooms
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value; //search and save a value from checkbox
    const name = event.target.name;
    console.log(target);
    console.log(value);
    this.setState(
      {
        [name]: value, //with this the value type from props change
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    let tempRooms = [...rooms];

    //capacity becomes a number

    capacity = parseInt(capacity);
    price = parseInt(price);
    //console.log(type, rooms,this.state.sortedRooms);
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    tempRooms = tempRooms.filter((room) => room.price <= price);

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms,
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          getRoom: this.getRoomsData,
          handleChange: this.handleChange,
        }}
      >
        {/* value looks like a reserved word in Context */}
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

//this part of the code is quiet hard, there is 2 ways to the same result
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <Consumer>{(value) => <Component {...props} context={value} />}</Consumer>
    );
  };
}

export { DataProvider, Context, Consumer };

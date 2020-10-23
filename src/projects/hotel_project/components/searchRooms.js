import React from "react";
import RoomFIlter from "./RoomFIlter";
import Roomlist from "./Roomlist";
import { withRoomConsumer } from "../context";
import LoadingIcon from "./loading_icon";
function SearchRooms({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <LoadingIcon />;
  }
  //console.log(context)
  return (
    <>
      <RoomFIlter allrooms={rooms} />
      <Roomlist sortedRooms={sortedRooms} />
    </>
  );
}
export default withRoomConsumer(SearchRooms);
// import React from "react";
// import RoomFIlter from "./RoomFIlter";
// import Roomlist from "./Roomlist";
// import { Consumer } from "../context";
// import LoadingIcon from "./loading_icon";
// export default function SearchRooms() {
//   return (
//     <>
//       <Consumer>
//         {(value) => {
//           //getting data from the context
//           const { loading, sortedRooms, rooms } = value;
//           if (loading) {
//             return <LoadingIcon />;
//           }
//           console.log(value);
//           return (
//             <div>
//               asdasd
//               <RoomFIlter allrooms={rooms} />
//               <Roomlist sortedRooms={sortedRooms} />
//             </div>
//           );
//         }}
//       </Consumer>
//     </>
//   );
// }

import React, {  useState, useEffect } from "react";
import { Title } from "./title";
import Secondsection from "./second_section";
import firebase from "projects/gallery_project/firebase/firebaseconfig";

function GetDataFunctionalComp() {
  const [data, setData] = useState([]); //snapshots get the value from firebase
  useEffect(() => {
    firebase
      .firestore()
      .collection("Services")
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      });
  }, []);

  return data;
}

export default function Services() {
  const othe = GetDataFunctionalComp();
//   const sum = othe.map((doc) => {
//     return doc.content;
//   });
//   console.log(sum + "llll");

  return (
    <div>
      <div>
        <Title title="Services" />
        <Secondsection data={othe} />
      </div>
    </div>
  );
}

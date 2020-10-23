import React from "react";
import { motion } from "framer-motion";
import "./renderimage.css";
import Mody from "./modal2";

const Modal = ({ image, setSelectedImage }) => {
  console.log(image)
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <motion.img src={image} alt="Image" initial={{y:'-100vh'}} animate={{y:0}}/>
      <Mody src={image}/>
    </div>
  );
};
export default Modal;

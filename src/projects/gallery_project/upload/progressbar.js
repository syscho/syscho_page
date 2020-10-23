import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file); //send those values to hook effect, file to url and file to progress
  useEffect(() => {
    return () => {
      setFile(null);
    };
  }, [url, setFile]);

  console.log(progress, url);
  return (
    <motion.div
      className="progressbar"
      style={{
        height: "5px",
        background: "white",
        marginTop: "20px",
      }}
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;

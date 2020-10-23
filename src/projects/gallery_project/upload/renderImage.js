import React from "react";
import useFireStore from "../hooks/useFireStore";
import "./renderimage.css";
import { motion } from "framer-motion";
const RenderImage = ({ setSelectedImage }, props) => {
  const { docs } = useFireStore("images");
  // const sum = docs.map((doc) => {
  //   return doc.url;
  // });
  // console.log(sum);
  // console.log(docs);
  
  return (
    <div
      class="container"
      style={{
        backgroundImage: "url(" + require("assets/img/bg19.jpg") + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              layout
              whileHover={{ opacity: 1 }}
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="Your image"
                className="img-fluid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};
export default RenderImage;

/* <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img src={doc.url} alt="Your image" class='img-fluid'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1}}/>
          </motion.div>
        ))}
    </div> */

// <Container>
//       <Row>
//         {docs &&
//           docs.map((doc) => (
//               <Col
//                 md="4"
//                 whileHover={{ opacity: 1 }}
//                 key={doc.id}
//                 onClick={() => setSelectedImage(doc.url)}
//                 style={{ padding: "30px" }}
//               >
//                 <motion.img
//                   src={doc.url}
//                   alt="Your image"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 1 }}
//                 />
//               </Col>
//           ))}
//       </Row>
//     </Container>

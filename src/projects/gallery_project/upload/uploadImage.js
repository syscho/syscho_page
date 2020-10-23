import React, { useState } from "react";
import ProgressBar from "./progressbar";
import { Row, Col } from "reactstrap";
import "./renderimage.css";
const Formupload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const typeImage = ["image/png", "image/jpeg"];

  const uploadFile = (e) => {
    const selected = e.target.files[0];
    if (selected && typeImage.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please upload an image file (png or jpeg)");
    }
  };
  return (
    <form>
      <Row>
        <Col
          className="ml-auto mr-auto text-center"
          md="6"
          style={{ color: "white" }}
        >
          <h4 className="content">
            In this secction you can save any images you want, and will be saved
            and displayed in real-time. Try it!
          </h4>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="ml-auto mr-auto text-center">
          <div class="custom-file">
            <input
              class="custom-file-input"
              style={{ opacity: "0" }}
              type="file"
              onChange={uploadFile}
            />
            <label class="custom-file-label">
              <strong>Select File</strong>
            </label>
          </div>
        </Col>
      </Row>
      <div className="output" style={{ color: "white" }}>
        {error && <div className="error">{error}</div>}
        {file && <div className="filename">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
      <div></div>
    </form>
  );
};

export default Formupload;

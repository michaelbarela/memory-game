import React from "react";
import "./image.css";

const Image = props => (
  <div className="image">
      <img id={props.id} src={props.url}
        onClick={() => props.handleImageChange(props.id)} alt="clicky game" />
  </div>
);

export default Image;
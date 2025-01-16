import React, { useState } from "react";
import "../../styles/component/zoomimg.css";
import { createPortal } from "react-dom";

type ZoomProps = {
  images: string;
};

const ZoomImage = ({ images }: ZoomProps) => {
  const [isZoom, setIsZoom] = useState<boolean>(false);
  console.log(isZoom);
  return (
    <div>
      <div
        className="img-small"
        onClick={() => {
          setIsZoom(true);
        }}
      >
        <img className="img" src={images} alt="" />
      </div>
      {isZoom &&
        createPortal(
          <div
            onClick={() => {
              setIsZoom(false);
            }}
            className="model"
          >
            <img src={images} alt="" />
          </div>,
          document.body
        )}
    </div>
  );
};

export default ZoomImage;

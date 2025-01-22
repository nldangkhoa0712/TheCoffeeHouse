import { Box, Button } from "@mui/material";
import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  MouseEvent,
  useRef,
  useState,
} from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import { UseFormSetValue } from "react-hook-form";
import { AddProductRequest } from "../../models/product.model";
import { FileRequestData } from "../../utils/convertBase64";

interface UploadImgProps {
  images: File[];
  onChange: (...event: any[]) => void;
  setImageDefault: UseFormSetValue<AddProductRequest>;
}

const UploadImg = ({ images, onChange, setImageDefault }: UploadImgProps) => {
  const [imgDefault, setImgDefault] = useState<{
    isDefaut: boolean;
    index: number;
  }>({ isDefaut: true, index: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddImg = (
    newImg: File[],
    currentImg: File[],
    maxLength: number = 3
  ) => {
    const validImg =
      newImg.length > maxLength ? newImg.splice(-maxLength) : newImg;
    if (currentImg.length >= maxLength) {
      return [...currentImg.splice(1), ...validImg];
    }
    return [...currentImg, ...validImg];
  };

  const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const img = Array.from(e.target.files);
    onChange(handleAddImg(img, images));
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleClose = (idx: number) => {
    const imagesRemoved = images.filter((_, index) => index != idx);
    onChange(imagesRemoved);
  };

  const handleSetDefault = (
    key: keyof {
      isDefaut: boolean;
      index: number;
    },
    img: File,
    value: boolean | number
  ) => {
    setImgDefault({ ...imgDefault, [key]: value });
    setImageDefault("imageDefaultNavigation", img);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", width: "100%" }}>
      <img
        style={{
          width: "80%",
          borderRadius: "10px",
          aspectRatio: "1/1",
          objectFit: "cover",
          boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
        src={
          images[0]
            ? URL.createObjectURL(images[0])
            : "https://images.squarespace-cdn.com/content/v1/61d4ae3e75f118763071da88/1689132396814-OMYNEBVODRU15LQEF7FU/kiss-cut-stickers-white-15x3.75-default-64ae1d63dd0b8.png?format=1500w"
        }
        alt=""
      />

      {/* List Image */}
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "10px auto",
          gap: "20px",
        }}
      >
        {images.map((item, index) => {
          return (
            <div
              style={{
                position: "relative",
                width: "20%",
                textAlign: "center",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "70px",
                  borderRadius: "10px",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  border:
                    imgDefault.isDefaut && index == imgDefault.index
                      ? "1px solid green"
                      : "",
                }}
                onClick={() => handleSetDefault("index", item, index)}
                src={URL.createObjectURL(item)}
              />

              <CancelIcon
                fontSize="small"
                sx={{
                  position: "absolute",
                  right: "2px",
                  top: "4px",
                  cursor: "pointer",
                }}
                onClick={() => handleClose(index)}
              />
            </div>
          );
        })}
        <input type="file" ref={inputRef} hidden onChange={handleChangeImg} />
        <Button
          sx={{ width: "21%", height: "70px", border: "1px dashed black" }}
          onClick={handleClick}
        >
          <AddCircleIcon />
        </Button>
      </div>
    </div>
  );
};

export default UploadImg;

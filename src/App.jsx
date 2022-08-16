import React from "react";
import { useState, useEffect } from "react";
import { storage } from "./Firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const App = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded");
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="center-div">
          <div className="input-div">
            <input
              className="input"
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
          </div>

          <div className="btn-div">
            <button className="input" onClick={uploadImage}>
              Upload Image
            </button>
          </div>
        </div>

        <div className="image-card">
          {imageList.map((url) => {
            return <img src={url} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;

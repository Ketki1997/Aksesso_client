import React from "react";
import { getRandomColor, createImageFromInitials } from "./Utils";
function Profile(props) {
  let name = props.name;
  let size = props.size;
  let imgSrc = "";

  return (
    <div>
      <img
        id="preview"
        src={
          imgSrc.length <= 0
            ? createImageFromInitials(size, name, getRandomColor())
            : imgSrc
        }
        alt="profile-pic"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

export default Profile;

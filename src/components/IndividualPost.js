import ProfileImage from "./ProfileImage";
import PostImage from "./PostImage";
import Icons from "./Icons";
import { useState } from "react";

function IndividualPost(props) {
  let [clicked, setClicked] = useState(false);
  let icons = [
    {
      id: "heart",
      name: "far fa-heart",
      clickedName: "fas fa-heart",
      onClick: () => {
        setClicked(!clicked);
      },
    },
    {
      id: "comment",
      name: "far fa-comment",
      onClick: () => {
        console.log("Comment");
      },
    },
    {
      id: "send",
      name: "far fa-paper-plane",
      onClick: () => {
        console.log("Send");
      },
    },
    {
      id: "bookmark",
      name: "far fa-bookmark",
      style: { marginLeft: "auto" },
      clickedName: "fas fa-bookmark",
      onClick: () => {
        setClicked(!clicked);
      },
    },
  ];
  let item = props.item;

  return (
    <div
      className="post"
      style={{ margin: "1rem 0" }}
      key={item.key}
      id={item.id}>
      <div className="flex flex-row align-items-center user-row">
        <ProfileImage
          image={item.userImage}
          width="20px"
          height="20px"></ProfileImage>
        <span style={{ fontWeight: "bold", margin: "0 0 0 1rem" }}>
          {item.username}
        </span>
      </div>
      <div>
        <PostImage img={item.postImage}></PostImage>
      </div>
      <div>
        <Icons
          iconsList={icons}
          style={{ padding: "0.5rem 1rem" }}
          clicked={clicked}
          id={item.id}></Icons>
      </div>
      <div
        className="post-description"
        style={{ padding: ".5rem 1rem", textAlign: "left" }}>
        <p className="bold" style={{ margin: "0 0 .5rem 0" }}>
          {item.likes} likes
        </p>
        <p>
          <span className="bold pointer" style={{ margin: "0 1rem 0 0" }}>
            {item.username}
          </span>
          <span>{item.postDescription}</span>
        </p>
      </div>
    </div>
  );
}

export default IndividualPost;

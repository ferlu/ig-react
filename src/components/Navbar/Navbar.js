import SearchBar from "./SearchBar";
import Icons from "../Icons";
import ProfilePic from "../ProfileImage";
import ramen from "../../assets/ramen.png";

function Navbar() {
  let iconsList = [
    "fas fa-home",
    "fab fa-facebook-messenger",
    "far fa-compass",
    "far fa-heart",
  ];

  return (
    <div className="flex bar-container align-items-center">
      <div className="logo pointer"></div>
      <SearchBar></SearchBar>
      <div className="flex">
        <Icons iconsList={iconsList} barIcon="true"></Icons>
        <ProfilePic
          image={ramen}
          width="36rem"
          height="36rem"
          style={{ padding: ".5rem", boxSizing: "border-box" }}></ProfilePic>
      </div>
    </div>
  );
}

export default Navbar;

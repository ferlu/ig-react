function ProfileImage(props) {
  return (
    <img
      alt="user"
      className="user-photo pointer"
      src={props.image}
      width={props.width}
      height={props.height}
      style={props.style}></img>
  );
}

export default ProfileImage;

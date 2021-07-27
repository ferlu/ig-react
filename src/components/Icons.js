function Icons(props) {
  return (
    <div className="flex" style={props.style}>
      {props.iconsList.map((icon, index) => {
        return (
          // Siempre entre corchetes, a menos que se pase un str
          <i
            key={index}
            className={`${
              props.clicked ? icon.clickedName || icon.name : icon.name
            } pointer
            ${props.barIcon ? "bar-icon" : "post-icons"}`}
            style={icon.style}
            onClick={icon.onClick}></i>
        );
      })}
    </div>
  );
}

export default Icons;

function Icons(props) {
  return (
    <div className="flex" style={props.style}>
      {props.iconsList.map((iconName, index) => {
        return (
          <i
            key={index}
            // Siempre entre corchetes, a menos que se pase un str
            className={`${iconName} pointer
            ${props.barIcon ? "bar-icon" : "post-icons"}`}
            style={
              iconName.includes("bookmark") ? { marginLeft: "auto" } : {}
            }></i>
        );
      })}
    </div>
  );
}

export default Icons;

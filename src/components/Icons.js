function Icons(props) {
  return (
    <div className="flex">
      {props.iconsList.map((iconName, index) => {
        return (
          <i
            key={index}
            className={`${iconName} pointer
            ${props.barIcon ? "bar-icon" : "post-icons"}`}></i>
        );
      })}
    </div>
  );
}

export default Icons;

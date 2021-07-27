function useState(initialState) {
  let state = initialState;
  function setState(val) {
    state = val;
    React.rerender();
  }
  return [state, setState];
}

const [myState, mySetState] = useState("hola");

console.log(myState); // hola

mySetState("mundo");

console.log(myState); // mundo

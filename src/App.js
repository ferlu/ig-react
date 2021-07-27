import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="flex container">
        <div className="posts-container">
          <Posts data={data}></Posts>
        </div>
        <div className="suggestions-container">asdasd</div>
      </div>
    </div>
  );
}

export default App;

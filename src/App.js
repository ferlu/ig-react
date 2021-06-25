import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post";
import { data } from "./data/data";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="flex container">
        <div className="posts-container">
          <Post data={data}></Post>
        </div>
        <div className="suggestions-container">asdasd</div>
      </div>
    </div>
  );
}

export default App;

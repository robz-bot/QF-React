import "./App.css";
import PostList from "./Components/PostList";
import Header from "./SharedComponents/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewPost from "./Components/NewPost";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" match element={<PostList />}></Route>
            <Route path="/new-post/:id" element={<NewPost />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

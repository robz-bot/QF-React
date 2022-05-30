import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import PostService from "../Services/PostService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function NewPost() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [description, setDescription] = useState("");
  // const [userId, setUserId] = useState("");

  const getPostById = () => {
    PostService.getPostById(id).then((data) => {
      console.log(data);
      if (data.data.success) {
        setDescription(data.data.description);
      }
    });
  };

  //Load Post when user clicks edit btn
  if (id !== "-1") {
    getPostById();
  }

  const submitData = () => {
    console.log(description);
    const request = {
      description,
      userId: "1",
    };
    PostService.newPost(request).then((data) => {
      console.log(data);
      if (data.data.success) {
        toast.success(data.data.message);
      }
      navigate("/", { replace: true });
    });
  };

  return (
    <div>
      <h3 className="text-center">New Post</h3>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className="form-control form-control-sm"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="text-center">
        <button className="btn btn-sm btn-primary m-2" onClick={submitData}>
          Save
        </button>
        <Link
          to="/"
          className="btn btn-sm btn-secondary m-2"
          id="redirectToList"
        >
          Cancel
        </Link>
        <ToastContainer />
      </div>
    </div>
  );
}

export default NewPost;

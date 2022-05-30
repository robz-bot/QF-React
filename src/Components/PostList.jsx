import React, { useState, useEffect } from "react";

import PostService from "../Services/PostService";
function PostList(props) {
  console.log(props);
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    PostService.getPosts().then((data) => {
      console.log(data);
      setAPIData(data.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Post List</h2>
      <div className="row">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <td>#</td>
              <td>Post</td>
              <td>Posted By</td>
              <td>Posted On</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {APIData.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td
                  dangerouslySetInnerHTML={{
                    __html: post.description.slice(0, 12),
                  }}
                ></td>
                <td>{post.userName}</td>
                <td>{post.updatedOn.split("T")[0]}</td>
                <td>
                  <a href={`/new-post/${post.id}`} className="text-primary">
                    <i class="bi bi-pencil-square"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PostList;

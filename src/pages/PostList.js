import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../constants/global";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/posts-list/`).then((response) => {
      setPosts(response.data);
    });
  }, []);

  const sendId = (id) => {
    navigate("/posts/" + id);
  };

  return (
    <div>
      <h1 className="mb-5 text-center">Latest from Knowledge Society</h1>
      <div className="album bg-light">
        <div className="row">
          {posts.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card mb-4 box-shadows">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p className="card-text">{item.description}</p>
                  <div className="mb-3">{item.created}</div>
                  <span className="card-categoy">{item.category}</span>
                  <div className="text-center">
                    <a
                      onClick={() => {
                        sendId(item.id);
                      }}
                      className="btn btn-md btn-outline-secondary mr-5"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;

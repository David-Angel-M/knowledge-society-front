import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { URL } from "../constants/global";

const PostListProv = () => {
  const [posts, setPosts] = useState([]);
  const { authTokens, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, []);

  const sendId = (id) => {
    navigate("/provider/posts/" + id);
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(`${URL}/affiliate/posts-list/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authTokens.access,
        },
      });

      setPosts(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        logoutUser();
      }
    }
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .delete(`${URL}/affiliate/posts-delete/${id}/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        })
        .then(() => {
          getData();
        });
    }
  };

  const getData = () => {
    axios
      .get(`${URL}/affiliate/posts-list/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        },
      })
      .then((response) => {
        setPosts(response.data);
      });
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
                    <button
                      onClick={() => {
                        sendId(item.id);
                      }}
                      className="btn btn-md btn-outline-secondary mr-5"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        onDelete(item.id);
                      }}
                      className="btn btn-md btn-outline-danger"
                    >
                      Delete
                    </button>
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

export default PostListProv;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//const URL = "http://127.0.0.1:8000/v1";
const URL = "https://knowledge-society-bc51a0144a7f.herokuapp.com/v1";

const List = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/post-list/`).then((response) => {
      setPosts(response.data);
    });
  }, []);

  const sendId = (id) => {
    navigate("/post/edit/" + id);
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`${URL}/post-delete/${id}/`).then(() => {
        getData();
      });
    }
  };

  const getData = () => {
    axios.get(`${URL}/post-list/`).then((getData) => {
      setPosts(getData.data);
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
                  <p className="card-text max-lines">{item.description}</p>
                  <div className="mb-3">{item.created}</div>
                  <span className="categoy-tag">{item.category}</span>
                  <div className="text-center">
                    <a
                      onClick={() => {
                        sendId(item.id);
                      }}
                      className="btn btn-md btn-outline-secondary mr-5"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        onDelete(item.id);
                      }}
                      className="btn btn-md btn-outline-danger"
                    >
                      Delete
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

export default List;

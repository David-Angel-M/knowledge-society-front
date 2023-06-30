import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const URL = "https://knowledge-society-bc51a0144a7f.herokuapp.com/v1";

const CreateUpdate = () => {
  const { Id } = useParams();
  const navigate = useNavigate();

  const [title, titleSet] = useState("");
  const [description, descriptionSet] = useState("");

  useEffect(() => {
    if (Id) {
      axios.get(`${URL}/post/${Id}/`).then((response) => {
        titleSet(response.data.title);
        descriptionSet(response.data.description);
      });
    }
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      description: description
    };

    if (!Id) {
      fetch(URL + "/post/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      fetch(URL + "/post/" + Id + "/", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <form onSubmit={handlesubmit}>

      <label className="form-label semi-bold">Name</label>
      <input
        required
        value={title}
        onChange={(e) => titleSet(e.target.value)}
        className="form-control"
      ></input>

      <label className="form-label semi-bold">Description</label>
      <textarea
        value={description}
        onChange={(e) => descriptionSet(e.target.value)}
        className="form-control"
      ></textarea>

      <div className="text-center mt-4">
        <button className="btn btn-secondary mr-5" type="submit">
          Save
        </button>
        <Link to="/" className="btn btn-outline-back">
          Go back
        </Link>
      </div>
    </form>
  );
};

export default CreateUpdate;

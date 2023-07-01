import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
//const URL = "http://127.0.0.1:8000/v1";
const URL = "https://knowledge-society-bc51a0144a7f.herokuapp.com/v1";

const CreateUpdate = () => {
  const { Id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (Id) {
      axios.get(`${URL}/post/${Id}/`).then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      });
    }

    // Fetch category list
    axios.get(`${URL}/category-list/`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const body = {
      title: title,
      description: description,
      category: category,
    };

    if (!Id) {
      axios
        .post(URL + "/post/", body)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .put(URL + "/post/" + Id + "/", body)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handlesubmit}>
      <label className="form-label semi-bold">Name</label>
      <input
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      ></input>

      <label className="form-label semi-bold">Description</label>
      <textarea
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-3"
      ></textarea>

      <label className="form-label semi-bold">Category</label>
      <select
        name="category"
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      <div className="text-center mt-4">
        <button className="btn btn-secondary mr-5" type="submit">
          Save
        </button>
        <Link to="/" className="btn btn-outline-back">
          Back
        </Link>
      </div>
    </form>
  );
};

export default CreateUpdate;

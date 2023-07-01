import { useEffect, useState } from "react";
import axios from "axios";
//const URL = "http://127.0.0.1:8000/v1";
const URL = "https://knowledge-society-bc51a0144a7f.herokuapp.com/v1";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/category-list/`).then((response) => {
      setCategories(response.data);
    });
  }, []);
  const handlesubmit = (e) => {
    e.preventDefault();
    const body = {
      category: category,
    };
    console.log(category);
  };
  return (
    <form onSubmit={handlesubmit}>
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
      <button className="btn btn-secondary mr-5" type="submit">
        Save
      </button>
    </form>
  );
};

export default CategoryList;
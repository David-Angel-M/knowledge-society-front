import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Register = () => {
  let { registerUser } = useContext(AuthContext);
  return (
    <div className="flex-center">
      <div className="card">
        <form onSubmit={registerUser} className="card-body">
          <h1 className="mb-4 text-center">Register</h1>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          ></input>

          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Enter Password"
            pattern=".{6,}"
            title="Ensure this field has at least 6 characters."
            required
          ></input>

          <button
            className="btn btn-secondary w-100 mb-3"
            type="submit"
          >
            Register
          </button>
          <p className="text-center">
            Already have an account?:{" "}
            <a className="btn--blue" href="/login">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

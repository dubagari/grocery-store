import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signinStart,
  signinSuccess,
  signinFailure,
} from "../redux/Store/userSlice";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signinStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signinFailure(data.message));
        return;
      }
      dispatch(signinSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signinFailure(error.message));
    }
  };

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  console.log(formData);

  return (
    <>
      <div className="h-[550px]">
        <div className="max-w-lg mx-auto ">
          <h1 className="text-3xl uppercase font-semibold text-center my-20">
            Log in
          </h1>

          <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              id="email"
              className="p-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
              onChange={handlechange}
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              className="p-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950"
              onChange={handlechange}
            />

            <button
              disabled={loading}
              className="bg-blue-950 p-3 uppercase text-white rounded-lg disabled:opacity-85"
            >
              {loading ? "Loading..." : "log in"}
            </button>
          </form>
          <div className=" flex gap-3 p-3">
            <p> Dont have an account:</p>{" "}
            <Link to={"/signup"} className="text-green-500 underline">
              sign up
            </Link>
          </div>
          <p className="text-red-600 p-3">
            {error ? error || "something is wrong" : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

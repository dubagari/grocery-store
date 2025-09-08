import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
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
            sign up
          </h1>

          <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="first name"
              id="firstname"
              className="p-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={handlechange}
            />
            <input
              type="text"
              placeholder="surname"
              id="surname"
              className="p-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={handlechange}
            />
            <input
              type="email"
              placeholder="email"
              id="email"
              className="p-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={handlechange}
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              className="p-3 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              onChange={handlechange}
            />

            <button
              disabled={loading}
              className="bg-blue-950 p-3 uppercase text-white rounded-lg disabled:opacity-85"
            >
              {loading ? "Loading..." : "sign up"}
            </button>
          </form>
          <div className=" flex gap-3 p-3">
            <p> i have account:</p> <Link to={"/login"}>signin</Link>
          </div>
          <p className="text-red-600 p-3">{error && "something is wrong"}</p>
        </div>
      </div>
    </>
  );
};

export default Signup;

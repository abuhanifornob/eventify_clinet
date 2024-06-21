import { Link, useLocation, useNavigate } from "react-router-dom";

import loginImg from "../assets/images/login.jpg";
import GoogleRegister from "../components/login_register/GoogleRegister";
import FacebookRegister from "../components/login_register/FacebookRegister";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const from = location?.state?.from?.pathname || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    await login(email, password)
      .then((result) => {
        navigate(from);
        localStorage.setItem("token", result.token);
        toast.success("Registration Successfull!!!");
        form.reset();
      })
      .catch(() => {
        setError(
          "Email Or Password Invali ! Please Correct Email and Password"
        );
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse my-32">
        <div className="text-center lg:text-left">
          <img
            className="h-[75%] w-[75%] rounded-lg mx-auto"
            src={loginImg}
            alt=""
          />
        </div>
        <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {error && (
                <label className="label">
                  <p className="text-red-500">{error}</p>
                </label>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mb-5">
            <p className="text-xl font-medium font-serif">
              If You New Hear ?
              <Link className="text-orange-300" to={"/registration"}>
                Registration
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center w-full mb-4">
            <GoogleRegister />

            <div className="divider divider-horizontal">OR</div>
            <FacebookRegister />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

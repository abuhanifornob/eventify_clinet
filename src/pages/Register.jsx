import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import registration from "../assets/images/registration.jpg";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
const Register = () => {
  const { createNewUser } = useAuth();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    createNewUser(email, password)
      .then((data) => {
        const user = data.user;
        console.log(user);
        toast.success("Registration Successfull!!!");
        form.reset();
      })
      .then((error) => {
        console.log(error);
      });
    console.log(email, password, confirmPassword);
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse my-32">
        <div className="text-center lg:text-left">
          <img
            className="w-[70%] h-[70%] mx-auto shadow-lg"
            src={registration}
            alt=""
          />
        </div>
        <div className="card shrink-0 w-full lg:w-1/2 shadow-2xl bg-amber-200">
          <form onSubmit={handleRegistration} className="card-body font-bold">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="confirmPassword"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
          </form>
          <div className="text-center mb-5">
            <p className="text-xl font-medium font-serif">
              Already Have a Account ? Please !
              <Link className="text-orange-300" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center w-full mb-4">
            <button className="btn text-xl w-2/5 flex justify-center items-center">
              <FaGoogle /> With Google
            </button>
            <div className="divider divider-horizontal">OR</div>
            <button className="btn text-xl w-2/5 flex justify-center items-center">
              <FaFacebook /> With Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

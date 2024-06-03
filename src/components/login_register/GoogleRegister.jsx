import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const GoogleRegister = () => {
  const { googleLogin } = useAuth();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((data) => {
        const user = data.user;
        console.log(user);
        toast.success("Google Login Success");
      })
      .then((error) => {
        console.log(error);
      });
    console.log("Google Login");
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn text-xl flex justify-center items-center"
      >
        <FaGoogle /> With Google
      </button>
    </div>
  );
};

export default GoogleRegister;

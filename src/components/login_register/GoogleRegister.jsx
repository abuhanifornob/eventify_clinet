import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleRegister = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = async () => {
    try {
      const data = await googleLogin();
      const user = data.user;
      const userInfo = {
        email: user?.email,
        name: user?.displayName,
      };

      const response = await fetch(
        "https://eventify-server-beta.vercel.app/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      localStorage.setItem("token", result.token);
      navigate(from);
      toast.success("Google Login Success");
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Google Login Failed");
    }
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

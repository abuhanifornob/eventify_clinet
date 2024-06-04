import { FaFacebook } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const FacebookRegister = () => {
  const { facebookLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleFacebookLogin = () => {
    facebookLogin()
      .then((data) => {
        navigate(from);
        const user = data.user;
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <button
      onClick={handleFacebookLogin}
      className="btn text-xl flex justify-center items-center"
    >
      <FaFacebook /> With Facebook
    </button>
  );
};

export default FacebookRegister;

import { FaFacebook } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const FacebookRegister = () => {
  const { facebookLogin } = useAuth();
  const handleFacebookLogin = () => {
    facebookLogin()
      .then((data) => {
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

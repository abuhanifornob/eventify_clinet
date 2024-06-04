import Banner from "../components/Home/Banner";
import FavoriteEvents from "../components/Home/FavoriteEvents";
import Steps from "../components/Home/Steps";
import Testmonial from "../components/Home/Testmonial";
import UserAsk from "../components/Home/UserAsk";

const Home = () => {
  return (
    <div>
      <Banner />
      <FavoriteEvents />
      <Testmonial />
      <UserAsk />
      <Steps />
    </div>
  );
};

export default Home;

import banner from "../../assets/images/banner.jpg";
const Banner = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={banner}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-6xl font-bold text-center mb-10 ">
              <br /> Welcome to Eventify
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Your Ultimate Event Management Solutionten
            </h1>
            <p className="mb-8 leading-relaxed">
              Streamline the process of planning, organizing, and attending
              events with Eventify. From intimate gatherings to large-scale
              conferences, Eventify empowers you with the tools and features
              needed to make your event a success..
            </p>
            <div className="flex justify-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

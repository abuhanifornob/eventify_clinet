/* eslint-disable react/prop-types */
const ProfileCard = ({ user }) => {
  return (
    <div className="w-full mx-auto my-8 p-6 text-2xl bg-slate-300 rounded-lg shadow-lg flex flex-col items-center space-y-6">
      <img
        src={user?.photo || "Photo Url"}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-md"
      />
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">
          {user?.name || "Null"}
        </h2>
        <p className="text-gray-600">{user?.email || "Null"}</p>
        <p className="text-gray-600">
          {user?.phone || "Phone Number is not Found"}
        </p>
        <div className="text-left mt-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Present Address:
          </h3>
          <p className="text-gray-600">{user?.presentAddress || "Null"}</p>
        </div>
        <div className="text-left mt-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Permanent Address:
          </h3>
          <p className="text-gray-600">{user?.permanentAddress || "Null"}</p>
        </div>
        <div className="text-left mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Gender:</h3>
          <p className="text-gray-600">{user?.gender || "Null"}</p>
        </div>
        <div className="text-left mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Nationality:</h3>
          <p className="text-gray-600">{user?.nationality || "Null"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

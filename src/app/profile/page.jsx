import React from "react";

const ProfilePage = async () => {
  const defaultImage = "../Images/user-profile.png";

  // Static user data object
  const userData = {
    payload: {
      image: "https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg",
      username: "Morng Many",
      firstName: "Many",
      lastName: "Many",
      birthDate: "2003-09-04",
      gender: "Female",
      contact: {
        phoneNumber: "123-456-7890",
        email: "johndoe@example.com",
        telegram: "johndoe_telegram",
        facebook: "johndoe_facebook",
      },
    },
  };

  return (
    <main className="sm:px-8 md:px-[5rem] lg:px-[8rem] xl:px-[13rem]">
      <div className="bg-white w-full pl-8 md:pl-10 lg:pl-32 rounded-xl shadow-md py-10">
        <h1 className="text-xl text-gray-800 font-semibold">
          Personal Details
        </h1>
        <div className="flex gap-x-8 items-center mt-8">
          <div
            className="h-24 w-24 rounded-full overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${
                userData?.payload?.image || defaultImage
              })`,
            }}
          ></div>
          <div>
            <h2 className="uppercase text-sm font-semibold text-gray-600">
              Username
            </h2>
            <p
              className={`text-lg font-semibold ${
                userData?.payload?.username ? "text-gray-800" : "text-red-600"
              }`}
            >
              {userData?.payload?.username || "N/A"}
            </p>
          </div>
        </div>
        <div className="w-full md:w-[85%] lg:w-[70%] grid grid-cols-2 mt-8 gap-y-2">
          <h2 className="uppercase text-sm font-semibold text-gray-600">
            First Name
          </h2>
          <h2 className="uppercase text-sm font-semibold text-gray-600">
            Last Name
          </h2>
          <p className="text-gray-600">
            {userData?.payload?.firstName || "N/A"}
          </p>
          <p className="text-gray-600">
            {userData?.payload?.lastName || "N/A"}
          </p>
        </div>
        <div className="w-full md:w-[85%] lg:w-[70%] grid grid-cols-2 mt-9 gap-2">
          <h2 className="uppercase text-sm font-semibold text-gray-600">
            Day Of Birth
          </h2>
          <h2 className="uppercase text-sm font-semibold text-gray-600">
            Gender
          </h2>
          <p className="text-gray-600">
            {userData?.payload?.birthDate || "N/A"}
          </p>
          <p className="text-gray-600">{userData?.payload?.gender || "N/A"}</p>
        </div>
      </div>
      <div className="bg-white w-full pl-8 md:pl-10 lg:pl-32 mt-4 rounded-xl shadow-md py-10">
        <h1 className="text-xl text-gray-800 font-semibold">Contacts</h1>
        <div className="w-full md:w-[85%] lg:w-[70%] grid grid-cols-2 mt-10 gap-y-2">
          <h2 className="text-sm font-semibold text-gray-600">Phone</h2>
          <h2 className="text-sm font-semibold text-gray-600">Email</h2>
          <p
            className={`${
              userData?.payload?.contact?.phoneNumber
                ? "text-gray-600"
                : "text-red-600"
            }`}
          >
            {userData?.payload?.contact?.phoneNumber ? (
              <a href={`tel:${userData?.payload?.contact?.phoneNumber}`}>
                {userData?.payload?.contact?.phoneNumber}
              </a>
            ) : (
              "N/A"
            )}
          </p>
          <a
            href={`mailto:${userData?.payload?.contact?.email || ""}`}
            className={`${
              userData?.payload?.contact?.email
                ? "text-gray-600"
                : "text-red-600"
            }`}
          >
            {userData?.payload?.contact?.email || "N/A"}
          </a>
        </div>
        <div className="w-full md:w-[85%] lg:w-[70%] grid grid-cols-2 mt-9 gap-2">
          <h2 className="text-sm font-semibold text-gray-600">Telegram</h2>
          <h2 className="text-sm font-semibold text-gray-600">Facebook</h2>
          <p
            className={`${
              userData?.payload?.contact?.telegram
                ? "text-gray-600"
                : "text-red-600"
            }`}
          >
            {userData?.payload?.contact?.telegram ? (
              <a href={`https://t.me/${userData?.payload?.contact?.telegram}`}>
                {userData?.payload?.contact?.telegram}
              </a>
            ) : (
              "N/A"
            )}
          </p>
          <p
            className={`${
              userData?.payload?.contact?.facebook
                ? "text-gray-600"
                : "text-red-600"
            }`}
          >
            {userData?.payload?.contact?.facebook ? (
              <a
                href={`https://facebook.com/${userData?.payload?.contact?.facebook}`}
              >
                {userData?.payload?.contact?.facebook}
              </a>
            ) : (
              "N/A"
            )}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;

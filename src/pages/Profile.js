// src/pages/Profile.js
import { signOut } from "firebase/auth";
import { auth } from "../Config";
import { useAuth } from "../context/AuthContext"; // if you created one
import toast from "react-hot-toast";
import { UserIcon } from "../Icons";
import PageHeading from "../common/PageHeading";

export default function Profile() {
  const { currentUser } = auth; // get the logged-in user

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out ✅");
  };

  return (
    <section className="">
      <PageHeading home="home" pagename="Profile" />
      <div className="w-10/12 m-auto">
        {currentUser ? (
          <div className="mt-20 p-6 rounded-lg shadow-md">
            <UserIcon className="w-24 h-24 rounded-full mb-4 border" />
            <p className="text-lg font-semibold">
              Name: {currentUser.displayName || "No name set"}
            </p>
            <p className="text-gray-700">Email: {currentUser.email}</p>
          </div>
        ) : (
          <p className="text-gray-600">No user is logged in</p>
        )}

        <button
          onClick={handleLogout}
          className="my-6 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </section>
  );
}

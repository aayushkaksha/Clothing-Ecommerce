import NavBar from "../components/NavBar";
import { Heart, Edit, X, Store } from "lucide-react";
import Wishlist from "../components/Wishlist";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [wishlistOpen, setWishlistOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="relative flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/330px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <NavLink
                to="/Seller"
                className="absolute top-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer flex items-center space-x-2"
              >
                <Store className="text-black w-5 h-5" />
                <p className="text-black font-semibold text-sm">Be a Seller</p>
              </NavLink>
            </div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-500">johndoe@example.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="flex space-x-4">
              <button
                className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black font-semibold border border-black transition duration-300 flex items-center"
                onClick={() => setWishlistOpen(true)}
              >
                <Heart className="mr-2" />
                Wishlist
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black font-semibold border border-black transition duration-300 flex items-center">
                <Edit className="mr-2" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        {wishlistOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-[1200px] max-h-[90vh] overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">My Wishlist</h2>
                <button
                  onClick={() => setWishlistOpen(false)}
                  className="text-gray-500 hover:text-black"
                >
                  <X size={24} />
                </button>
              </div>
              <Wishlist />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

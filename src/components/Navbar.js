import React from "react";

function Navbar() {
  return (
    <div className="w-full">
      <div className="flex items-center w-full py-8 px-16 justify-between">
        <div className="flex items-center gap-14">
          <div>
            <div className="font-medium text-3xl text-orange-600 mr-16">
              Logo
            </div>
          </div>
          <div className="flex items-center gap-14">
            <div className="text-gray-400">About Us</div>
            <div className="text-gray-400">Why Us?</div>
            <div className="text-gray-400">Blog</div>
            <div className="text-gray-400">Journey</div>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="font-medium text-orange-600">Sign Up</div>
          <div className="font-medium px-4 py- rounded-md bg-orange-600 text-white">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

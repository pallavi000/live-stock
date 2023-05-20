import React from "react";
import GAppImg from "../images/google.png";
import Image from "next/image";

function Footer() {
  return (
    <div className="grid grid-cols-8 py-16 px-32 bg-orange-50">
      <div className="flex flex-col gap-3 col-span-3 ">
        <div className="font-bold text-4xl leading-[50px] text text-orange-600">
          Trandiant
        </div>
        <div className="text-gray-500 text-sm my-3">
          Maximize your investment in the capital market world with the
          convenience and various features provided by Tradiant.
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-gray-500">Unduh Aplikasi</div>
          <div>
            <Image src={GAppImg} width="300" height="300" />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className="font-semibold text-gray-900 mb-3">Companies</div>
        <div className="text-sm font-medium text-gray-500">About Us</div>
        <div className="text-sm font-medium text-gray-500">Journey</div>
        <div className="text-sm font-medium text-gray-500">Blog</div>
        <div className="text-sm font-medium text-gray-500">Contact</div>
        <div className="text-sm font-medium text-gray-500">Help</div>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className="font-semibold text-gray-900 mb-3">Resources</div>
        <div className="text-sm font-medium text-gray-500">About Us</div>
        <div className="text-sm font-medium text-gray-500">Journey</div>
        <div className="text-sm font-medium text-gray-500">Blog</div>
        <div className="text-sm font-medium text-gray-500">Contact</div>
        <div className="text-sm font-medium text-gray-500">Help</div>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className="font-semibold text-gray-900 mb-3">Help</div>
        <div className="text-sm font-medium text-gray-500">About Us</div>
        <div className="text-sm font-medium text-gray-500">Journey</div>
        <div className="text-sm font-medium text-gray-500">Blog</div>
        <div className="text-sm font-medium text-gray-500">Contact</div>
        <div className="text-sm font-medium text-gray-500">Help</div>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <div className="font-semibold text-gray-900 mb-3">Contact Us</div>
        <div className="text-sm font-medium text-gray-500">(480) 555-0103</div>
        <div className="text-sm font-medium text-gray-500">
          6391 Elgin St.Celina, Delaware 10299
        </div>
        <div className="text-sm font-medium text-gray-500">
          hub@tradiant.com
        </div>
      </div>
    </div>
  );
}

export default Footer;

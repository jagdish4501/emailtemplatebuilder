"use client";
import React, { useState } from "react";
import Logout from "@/public/Logout.svg";
import Settings from "@/public/Settings.svg";
import Edit from "@/public/Edit.svg";
import Dropdown from "@/public/dropdown.svg";
import Greentick from "@/public/Greentick.svg";

interface ProfileDropdownProps {
  profileImage: string;
  name: string;
  email: string;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  profileImage,
  name,
  email,
}) => {
  const [drop, setDrop] = useState<boolean>(false); // Explicitly typing the state as boolean

  const toggleDrop = () => {
    setDrop(!drop);
  };

  return (
    <div className="relative inline-block mx-[600px]">
      <img
        onClick={toggleDrop}
        src={Dropdown.src}
        alt="dropdown icon"
        className="w-[24px] h-[24px] cursor-pointer"
      />
      {drop && (
        <div className="absolute right-0 mt-2 flex shadow-lg max-w-[520px] h-[270px] overflow-hidden">
          {/* Left Section */}
          <div className="w-[210px] border-r flex flex-col bg-[#FAFAFA]">
            <div className="ps-[16px] pt-[16px] pe-[12px] pb-[16px]">
              <div className="text-[#389F7F] hover:cursor-pointer hover:bg-gray-200 text-[14px] font-[600]">
                <span className="text-[24px] mx-2">+</span>
                Create Organization
              </div>
            </div>

            <div className="overflow-scroll scrollbar-none mb-[10px]">
              {/* Scrollable div */}
              <div className="ps-[10px] pt-[16px] pe-[10px] pb-[16px] hover:cursor-pointer hover:bg-gray-200">
                <div className="flex flex-row justify-between">
                  <div className="font-[500] text-[14px]">Default</div>
                  <img
                    src={Greentick.src}
                    alt="Greentick"
                    className="h-[20px] w-[20px]"
                  />
                </div>
                <div className="font-[500] text-[12px] text-[#727272]">
                  12345678943
                </div>
              </div>
            </div>
          </div>

          <div className="w-[310px] flex flex-col items-center bg-[#FFFFFF] pt-[16px]">
            <div className="flex flex-col items-center">
              <img
                src={profileImage} // Use the profile image prop
                alt="Profile"
                className="w-[42px] h-[42px] rounded-full bg-[#E0F6FA]"
              />
              <div className="mt-4 text-[14px] font-[500]">{name}</div>
              <div className="text-gray-600 text-[12px] font-[400]">
                {email}
              </div>
            </div>

            <div className="w-full mt-4">
              <div className="w-full hover:bg-gray-200 hover:cursor-pointer font-[500px] text-[14px] flex flex-row ps-[16px] py-[10px]">
                <img src={Settings.src} alt="Settings Icon" className="pe-2" />
                Organization Settings
              </div>
              <hr />
              <div className="w-full hover:bg-gray-200 hover:cursor-pointer font-[500px] text-[14px] flex flex-row ps-[16px] py-[10px]">
                <img src={Edit.src} alt="Edit Icon" className="pe-2" />
                Edit Profile
              </div>
              <hr />
              <div className="w-full hover:bg-gray-200 hover:cursor-pointer font-[500px] text-[14px] flex flex-row ps-[16px] py-[10px]">
                <img src={Logout.src} alt="Logout Icon" className="pe-2" />
                Logout
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

import React from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { FaInbox } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import { IoNotifications } from "react-icons/io5";

const ProfileBar: React.FC = () => {
  return (
    <div className="col-lg-3">
      <div className="card !bg-[#1F1F1F] !border !border-zinc-800">
        <div className="card-body">
          <div className="!mb-10 flex-between flex-wrap !gap-8">
            <h4 className="!mb-0 text-white !text-[18px]">Your Profile</h4>
            <SlOptionsVertical className='!w-4 !h-4 text-white cursor-pointer' />
          </div>
          <div className='flex flex-col items-center !w-[220px] mx-auto justify-center text-white'>
            <img className='!w-[150px] !h-[150px] !rounded-full' src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
            <p className='!text-[16px] !mt-[10px] font-medium'>
              Good Morning, Prashant
            </p>
            <span className='!text-[#7E7E7E] !text-[14px] text-center'>
              continue your journey and achieve Your Target
            </span>
          </div>
          <div className="!h-[4px] rounded-full !w-11/12 !mx-auto !mt-3 !bg-[#111111]" />
          <div className='flex justify-between'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBar;


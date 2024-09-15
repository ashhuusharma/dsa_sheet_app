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
            <img className='!w-[150px] !h-[150px] !rounded-full' alt='no' src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
            <p className='!text-[16px] !mt-[10px] font-medium'>
              Good Morning, Prashant
            </p>
            <span className='!text-[#7E7E7E] !text-[14px] text-center'>
              continue your journey and achieve Your Target
            </span>
          </div>
          <div className="!h-[4px] rounded-full !w-11/12 !mx-auto !mt-3 !bg-[#111111]" />
          <div className='flex justify-evenly !py-5'>
            <div className='!w-[40px] !h-[40px] rounded-full !border border-[#fff] bg-[#333] flex justify-center items-center'>
              <IoNotifications className='!w-5 !h-5 text-[#fff]' />
            </div>
            <div className='!w-[40px] !h-[40px] rounded-full !border border-[#fff] bg-[#333] flex justify-center items-center'>
              <PiCertificateFill className='!w-5 !h-5 text-[#fff]' />
            </div>
            <div className='!w-[40px] !h-[40px] rounded-full !border border-[#fff] bg-[#333] flex justify-center items-center'>
              <FaInbox className='!w-5 !h-5 text-[#fff]' />
            </div>
          </div>
        </div>
      </div>
      <div className="card !bg-[#1F1F1F] !border !border-zinc-800 !mt-5 !h-[340px]">
        <div className="card-body">
          <div className="!mb-6 flex-between flex-wrap !gap-8">
            <h4 className="!mb-0 text-white !text-[18px]">Your Mentor</h4>
            <SlOptionsVertical className='!w-4 !h-4 text-white cursor-pointer' />
          </div>

          <div className='flex text-white items-center justify-between !px-2'>
            <div className='!w-8/12 flex'>
              <img className='!w-[40px] !h-[40px] !rounded-full' alt='no' src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
              <div className='!ml-[10px]'>
                <span className='!text-[14px] font-bold'>Ashu Sharma</span>
                <p className='!text-[12px]'>Full Stack Developer</p>
              </div>
            </div>
            <button className='!w-3/12 !bg-[#702dff] !text-white !rounded-[10px] text-[12px] !py-1.5 font-bold'>
              Follow
            </button>
          </div>
          <div className="!h-[1px] rounded-full !w-11/12 !mx-auto !mt-3 !bg-[#757575] !mb-6" />
          <div className='flex text-white items-center justify-between !px-2'>
            <div className='!w-8/12 flex'>
              <img className='!w-[40px] !h-[40px] !rounded-full' alt='no' src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
              <div className='!ml-[10px]'>
                <span className='!text-[14px] font-bold'>Ashu Sharma</span>
                <p className='!text-[12px]'>Full Stack Developer</p>
              </div>
            </div>
            <button className='!w-3/12 !bg-[#702dff] !text-white !rounded-[10px] text-[12px] !py-1.5 font-bold'>
              Follow
            </button>
          </div>
          <div className="!h-[1px] rounded-full !w-11/12 !mx-auto !mt-3 !bg-[#757575] !mb-6" />
          <div className='flex text-white items-center justify-between !px-2'>
            <div className='!w-8/12 flex'>
              <img className='!w-[40px] !h-[40px] !rounded-full' alt='no' src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
              <div className='!ml-[10px]'>
                <span className='!text-[14px] font-bold'>Ashu Sharma</span>
                <p className='!text-[12px]'>Full Stack Developer</p>
              </div>
            </div>
            <button className='!w-3/12 !bg-[#702dff] !text-white !rounded-[10px] text-[12px] !py-1.5 font-bold'>
              Follow
            </button>
          </div>
          <div className="!h-[1px] rounded-full !w-11/12 !mx-auto !mt-3 !bg-[#757575] !mb-6" />
        </div>
      </div>
    </div>
  );
}

export default ProfileBar;


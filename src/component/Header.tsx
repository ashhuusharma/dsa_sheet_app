import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="top-navbar flex-between gap-16">
      <div className="flex-align gap-16">
        <button type="button" className="toggle-btn d-xl-none d-flex text-26 text-gray-500"><i
          className="ph ph-list"></i></button>

        <form action="#" className="w-350 d-sm-block d-none">
          <div className="position-relative">
            <button type="submit" className="input-icon text-xl d-flex text-gray-100 pointer-event-none">
              <FaSearch className='!w-4 !h-4' />
            </button>
            <input type="text"
              className="form-control ps-40 h-40 border-transparent focus-border-main-600 bg-main-50 rounded-pill placeholder-15"
              placeholder="Search..." />
          </div>
        </form>
      </div>

      <div className="flex-align gap-16">
        <div className="flex-align gap-8">
          <div className="dropdown">
            <button
              className="dropdown-btn shaking-animation text-gray-500 w-40 h-40 !bg-[#333] hover-bg-main-100 transition-2 rounded-circle text-xl flex-center"
              type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="position-relative">
                <IoNotifications className='!w-5 !h-5 text-white'/>
                <span className="alarm-notify position-absolute end-0"></span>
              </span>
            </button>
          </div>
        </div>

        <div className="dropdown">
          <button className="users border flex justify-between items-center !gap-x-4 !bg-[#333] border-gray-200 rounded-pill !py-1.5 !px-2"
            type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className="position-relative">
              <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="Image" className="!h-8 !w-8 rounded-circle" />
              <span className="activation-badge w-8 h-8 position-absolute inset-block-end-0 inset-inline-end-0"></span>
            </span>
            <FaChevronDown className='!w-3 !h-3 text-white'/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;


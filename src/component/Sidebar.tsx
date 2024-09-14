import React from 'react';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaClipboard } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

// Define the structure of the menu item
interface MenuItem {
  title: string;
  icon: any;
  link?: string;
  subMenu?: MenuItem[];
  badge?: string;
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: <TbLayoutDashboardFilled color='#702dff' className='!h-5 !w-5' />,
    link: '/',
    badge: '3',
  },
  {
    title: 'Courses',
    icon: <FaClipboard className='!h-5 !w-5' />,
    subMenu: [
      {
        title: 'Student Courses', link: 'student-courses.html',
        icon: ''
      }
    ],
  },
  {
    title: 'Students',
    icon: <FaUser className='!h-5 !w-5' />,
    link: 'students.html',
  },
  {
    title: 'Settings',
    icon: <IoIosSettings className='!h-5 !w-5' />,
    link: 'setting.html',
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar bg-[#111111] !overflow-hidden">
      <button type="button" className="sidebar-close-btn text-gray-500 hover-text-white hover-bg-main-600 text-md w-24 h-24 border border-gray-100 hover-border-main-600 d-xl-none d-flex flex-center rounded-circle position-absolute">
        <i className="ph ph-x"></i>
      </button>

      <a href="/"
        className="sidebar__logo text-center p-20 position-sticky inset-block-start-0 w-100 z-1 pb-10">
        <img src="assets/images/logo/logo.png" alt="Logo" />
      </a>
      <div className="!h-[4px] rounded-full !w-11/12 !mx-auto !mt-3 !bg-[#212121]" />

      <div className="sidebar-menu-wrapper overflow-y-auto !overflow-hidden scroll-sm">
        <div className="p-20 pt-10">
          <ul className="sidebar-menu space-y-4">
            {menuItems.map((item, index) => (
              <li key={index} className={`!px-3 !py-2 rounded-lg mb-0.5 last:mb-0 transition-all ease-out duration-300 hover:!bg-[#212121] ${index == 0 && '!bg-[#212121]'}`}>
                <a
                  href={item.link || '#'}
                  className={` flex items-center !text-white hover:text-white truncate transition duration-150`}
                >
                  {item.icon}
                  <span className={`!text-[15px] ${index == 0 ? '!text-[#702dff]' : '!text-[#fff]'} !font-medium !ml-2 lg:!opacity-0 lg:sidebar-expanded:!opacity-100 2xl:!opacity-100 !duration-200`}>{item.title}</span>
                </a>
                {/* Submenu */}
                {item.subMenu && (
                  <ul className="sidebar-submenu pl-8 space-y-2 mt-2">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="sidebar-submenu__item">
                        <a
                          href={subItem.link}
                          className="sidebar-submenu__link block text-gray-400 hover:text-white hover:bg-gray-800 p-2 rounded-lg"
                        >
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="!h-[4px] rounded-full !w-11/12 !mx-auto !mt-3 !bg-[#212121]" />

        <div className="p-20 pt-80">
          <div className="flex flex-shrink-0 justify-between items-center mt-auto flex-wrap w-full">
            <div className="flex flex-col !p-4 space-y-4 !bg-[#1F1F1F] !rounded-[20px] w-full justify-center items-center text-center !border !border-zinc-800">
              <div className="flex gap-x-2">
                <img className="!w-6 !h-6" src="https://takeuforward.org/static/media/stars.d4d99b5a08dbff4a6839.png" alt="stars" />
                <span className="font-semibold text-white !text-[18px]">
                  Upgrade to <span className="!text-[#702dff]">Plus</span>
                </span>
              </div>
              <p className="!text-[14px] !text-[#BFBFBF]">Unleash Your Full Potential with Exclusive Features</p>
              <button type="button" className="!bg-[#702dff] !text-white !rounded-[10px] !px-7 !py-3">Get Started Now</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;


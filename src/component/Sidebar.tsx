import React, { useEffect, useState } from 'react';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaClipboard, FaLock } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { getAxiosWithToken } from '../axios/AxiosObj';

interface Course {
  _id: string;
  courseId: string;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const Sidebar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await getAxiosWithToken({
          url: "course/get",
          method: "GET"
        });

        if (data.success) {
          const courseItems = data.courses.map((course: Course) => ({
            title: course.title,
            link: `/course/${course.slug}`,
            icon: <FaClipboard className='!h-5 !w-5' />, // Or any other icon
            isLocked: false, // You can adjust this based on your logic
          }));

          setMenuItems([
            {
              title: 'Courses',
              icon: <FaClipboard className='!h-5 !w-5' />,
              subMenu: courseItems,
            }
          ]);
        }
      } catch (error: any) {
        setError('Failed to load courses.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Function to determine if the menu item is active
  const getActiveClass = (path: string) => {
    if (location.pathname === path) {
      return '!bg-[#212121]';
    }
    if (path !== '/' && location.pathname.startsWith(path)) {
      return '!bg-[#212121]';
    }
    return '';
  };

  return (
    <aside className="sidebar bg-[#111111] !overflow-hidden">
      <button
        type="button"
        className="sidebar-close-btn text-gray-500 hover-text-white hover-bg-main-600 text-md w-24 h-24 border border-gray-100 hover-border-main-600 d-xl-none d-flex flex-center rounded-circle position-absolute"
      >
        <i className="ph ph-x"></i>
      </button>

      <Link to="/"
        className="sidebar__logo text-center p-20 position-sticky inset-block-start-0 w-100 z-1 pb-10">
        <img src="/assets/images/logo/logo.png" alt="Logo" />
      </Link>

      <div className="!h-[4px] rounded-full !w-11/12 !mx-auto !mt-3 !bg-[#212121]" />

      <div className="sidebar-menu-wrapper overflow-y-auto !overflow-hidden scroll-sm">
        <div className="p-20 pt-10">
          <ul className="sidebar-menu space-y-4">
            <li className="mb-0.5 last:mb-0">
              <Link className={`rounded-lg flex items-center !px-3 !py-2 !text-white hover:text-white truncate transition-all ease-out duration-300 ${getActiveClass('/')}`} to="/">
                <TbLayoutDashboardFilled color='#702dff' className='!h-5 !w-5' />
                <span className="!text-[15px] !text-[#702dff] !font-medium !ml-2 lg:!opacity-0 lg:sidebar-expanded:!opacity-100 2xl:!opacity-100 !duration-200">
                  Dashboard
                </span>
              </Link>
            </li>

            <li className="mb-0.5 last:mb-0">
              <Link className={`rounded-lg flex items-center !px-3 !py-2 !text-white hover:text-white truncate transition-all ease-out duration-300 ${getActiveClass('/course')}`} to="#">
                <FaClipboard className='!h-5 !w-5' />
                <span className="!text-[15px] !text-gray-400 !font-medium !ml-2 lg:!opacity-0 lg:sidebar-expanded:!opacity-100 2xl:!opacity-100 !duration-200">
                  Courses
                </span>
              </Link>
              {loading && <p>Loading courses...</p>}
              {error && <p>{error}</p>}
              {!loading && !error && menuItems.length > 0 && menuItems.map((item, index) => (
                <ul key={index} className="!pl-8 !space-y-2 !mt-2">
                  {item.subMenu.map((subItem: any, subIndex: any) => (
                    <li key={subIndex} className="sidebar-submenu__item">
                      <Link
                        to={subItem.link}
                        className={`rounded-lg !text-[14px] flex items-center !font-medium !ml-2 !px-3 !py-2 !text-white hover:text-white truncate transition-all ease-out duration-300 ${getActiveClass(subItem.link)} ${subItem.isLocked ? '!bg-[#212121]' : ''}`}
                      >
                        {subItem.title}
                        {subItem.isLocked && (
                          <FaLock className="!text-red-500 !ml-2" title="Locked" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </li>

            <li className="mb-0.5 last:mb-0">
              <Link className={`rounded-lg flex items-center !px-3 !py-2 !text-white hover:text-white truncate transition-all ease-out duration-300 ${getActiveClass('/notes')}`} to="/">
                <FaUser className='!h-5 !w-5 text-gray-300' />
                <span className="!text-[15px] !text-gray-400 !font-medium !ml-2 lg:!opacity-0 lg:sidebar-expanded:!opacity-100 2xl:!opacity-100 !duration-200">
                  Notes
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="!h-[4px] rounded-full !w-11/12 !mx-auto !mt-3 !bg-[#212121]" />

        <div className="p-20 pt-80 absolute bottom-60 w-full">
          <p className="uppercase text-white text-[24px] font-medium !px-2 !mb-4">
            Settings
          </p>
          <ul className="sidebar-menu space-y-2 w-full">
            <li className={`mb-0.5 last:mb-0`}>
              <Link
                to={'#'}
                className={`${'!bg-[#212121]'}  rounded-lg flex items-center !px-1 !py-2 !text-white hover:text-white truncate transition-all ease-out duration-300 hover:!bg-[#212121]`}
              >
                <IoIosSettings className="!h-5 !w-5 !text-gray-400" />
                <span className={`!text-[16px] !text-gray-400 !font-medium !ml-2 lg:!opacity-0 lg:sidebar-expanded:!opacity-100 2xl:!opacity-100 !duration-200`}>
                  {'Settings'}
                </span>
                <FaLock className="!text-gray-400 !ml-2 absolute right-10" title="Locked" />
              </Link>
            </li>
            <li className={`mb-0.5 last:mb-0`}>
              <a
                href={'#'}
                className={`rounded-lg flex items-center !px-1 !py-2 !text-white hover:text-white truncate transition-all ease-out duration-300 hover:!bg-[#212121]`}
              >
                <IoLogOut className="!h-5 !w-5 text-red-600" />
                <span className={`!text-[16px] text-red-600 !font-medium !ml-2 lg:!opacity-0 lg:sidebar-expanded:!opacity-100 2xl:!opacity-100 !duration-200`}>
                  {'Logout'}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="p-20 pt-80 absolute bottom-3">
          <div className="flex flex-shrink-0 justify-between items-center mt-auto flex-wrap w-full">
            <div className="flex flex-col !p-4 space-y-4 !bg-[#1F1F1F] !rounded-[20px] w-full justify-center items-center text-center !border !border-zinc-800">
              <div className="flex gap-x-2">
                <img
                  className="!w-6 !h-6"
                  src="https://takeuforward.org/static/media/stars.d4d99b5a08dbff4a6839.png"
                  alt="stars"
                />
                <span className="font-semibold text-white !text-[18px]">
                  Upgrade to <span className="!text-[#702dff]">Plus</span>
                </span>
              </div>
              <p className="!text-[14px] !text-[#BFBFBF]">
                Unleash Your Full Potential with Exclusive Features
              </p>
              <button type="button" className="!bg-[#702dff] !text-white !rounded-[10px] !px-7 !py-3">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

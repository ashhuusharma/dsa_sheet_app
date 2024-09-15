import React from 'react';
import { Link } from 'react-router-dom';
import { FaReadme } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

interface CourseCardProps {
  courseImg: string;
  courseTitle: string;
  courseCategory: string;
  categoryClass: string; // To handle dynamic category colors
  createdBy: string;
  creatorImg: string;
  lessons: number;
  hours: number;
  rating: number;
  reviews: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseImg,
  courseTitle,
  courseCategory,
  categoryClass,
  createdBy,
  creatorImg,
  lessons,
  hours,
  rating,
  reviews,
}) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card !border !border-[#111111] !bg-[#333]">
        <div className="card-body p-8">
          <Link to="course-details.html"
            className="bg-main-100 rounded-8 overflow-hidden text-center !mb-1 h-164 flex-center">
            <img src={courseImg} alt="Course Image" />
          </Link>
          <div className="!py-1 !px-2">
            <div className='flex justify-between how are you?'>
              <span className={`!text-[10px] !py-1 !px-2 rounded-pill ${categoryClass} !mb-1`}>
                {courseCategory}
              </span>
              <div className="flex-align gap-8">
                <div className="flex-align gap-4">
                  <span className="text-sm text-main-600 d-flex">
                    <FaReadme className='!w-3 !h-3 text-white' />
                  </span>
                  <span className="!text-[12px] text-white">{lessons} Lessons</span>
                </div>

                <div className="flex-align gap-4">
                  <span className="text-sm text-main-600 d-flex">
                    <IoTime className='!w-3 !h-3 text-white' />
                  </span>
                  <span className="!text-[12px] text-white">{hours} Hours</span>
                </div>
              </div>
            </div>
            <Link to="course-details.html" className="hover-text-gray-50 !mt-2 !text-white !block !text-[20px] font-semibold">
              {courseTitle}
            </Link>
            <div className="!h-[1px] rounded-full !w-12/12 !mx-auto !mt-3 !bg-[#757575] !mb-2" />

            <div className="flex-align gap-8 flex-wrap">
              <img src={creatorImg} className="!w-7 !h-7 rounded-circle object-fit-cover" alt="User Image" />
              <div className='flex items-center flex-col'>
                <span className="text-white text-[12px]">Created by</span>
                <Link to="profile.html" className="fw-semibold text-[10px] text-white !block hover-text-white hover-text-decoration-underline">
                  {createdBy}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

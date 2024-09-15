import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './Course/Card';

const courses = [
  {
    courseImg: 'assets/images/thumbs/course-img1.png',
    courseTitle: 'Full Stack Web Development',
    courseCategory: 'Development',
    categoryClass: 'bg-success-50 text-success-600',
    createdBy: 'Albert James',
    creatorImg: 'assets/images/thumbs/user-img1.png',
    lessons: 24,
    hours: 40,
    rating: 4.9,
    reviews: '12k'
  },
  {
    courseImg: 'assets/images/thumbs/course-img5.png',
    courseTitle: 'Design System',
    courseCategory: 'Design',
    categoryClass: 'bg-warning-50 text-warning-600',
    createdBy: 'Albert James',
    creatorImg: 'assets/images/thumbs/user-img5.png',
    lessons: 24,
    hours: 40,
    rating: 4.9,
    reviews: '12k'
  },
  {
    courseImg: 'assets/images/thumbs/course-img6.png',
    courseTitle: 'React Native Course',
    courseCategory: 'Frontend',
    categoryClass: 'bg-danger-50 text-danger-600',
    createdBy: 'Albert James',
    creatorImg: 'assets/images/thumbs/user-img6.png',
    lessons: 24,
    hours: 40,
    rating: 4.9,
    reviews: '12k'
  }
];

const CourseSection: React.FC = () => {
  return (
    <div className="card !bg-[#1F1F1F] !border !border-zinc-800 !text-white !mt-6">
      <div className="card-body">
        <div className="!mb-10 flex-between flex-wrap gap-8">
          <h4 className="mb-0 !text-white">Top Courses Pick for You</h4>
          <Link to="#" className="text-13 fw-medium text-main-600 hover-text-decoration-underline">See All</Link>
        </div>

        <div className="row g-20">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              courseImg={course.courseImg}
              courseTitle={course.courseTitle}
              courseCategory={course.courseCategory}
              categoryClass={course.categoryClass}
              createdBy={course.createdBy}
              creatorImg={course.creatorImg}
              lessons={course.lessons}
              hours={course.hours}
              rating={course.rating}
              reviews={course.reviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;

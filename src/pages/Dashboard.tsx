import Header from "../component/Header";
import ProfileBar from "../component/ProfileBar";
import Sidebar from "../component/Sidebar";

export default function Dashboard() {
    return (
        <main className="!bg-[#111111]">
            <Sidebar />
            <div className="dashboard-main-wrapper !bg-[#111111]">
                <Header />
                <div className="dashboard-body !bg-[#111111]">
                    <div className="row gy-4">
                        <div className="col-lg-9">
                            <div className="row gy-4">
                                <div className="col-xxl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="mb-2">155+</h4>
                                            <span className="text-gray-600">Completed Courses</span>
                                            <div className="flex-between gap-8 mt-16">
                                                <span
                                                    className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl"><i
                                                        className="ph-fill ph-book-open"></i></span>
                                                <div id="complete-course" className="remove-tooltip-title rounded-tooltip-value">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="mb-2">39+</h4>
                                            <span className="text-gray-600">Earned Certificate</span>
                                            <div className="flex-between gap-8 mt-16">
                                                <span
                                                    className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-two-600 text-white text-2xl"><i
                                                        className="ph-fill ph-certificate"></i></span>
                                                <div id="earned-certificate" className="remove-tooltip-title rounded-tooltip-value">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="mb-2">25+</h4>
                                            <span className="text-gray-600">Course in Progress</span>
                                            <div className="flex-between gap-8 mt-16">
                                                <span
                                                    className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-purple-600 text-white text-2xl">
                                                    <i className="ph-fill ph-graduation-cap"></i></span>
                                                <div id="course-progress" className="remove-tooltip-title rounded-tooltip-value">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="mb-2">18k+</h4>
                                            <span className="text-gray-600">Community Support</span>
                                            <div className="flex-between gap-8 mt-16">
                                                <span
                                                    className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-warning-600 text-white text-2xl"><i
                                                        className="ph-fill ph-users-three"></i></span>
                                                <div id="community-support" className="remove-tooltip-title rounded-tooltip-value">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-24">
                                <div className="card-body">
                                    <div className="mb-20 flex-between flex-wrap gap-8">
                                        <h4 className="mb-0">Top Courses Pick for You</h4>
                                        <a href="student-courses.html"
                                            className="text-13 fw-medium text-main-600 hover-text-decoration-underline">See All</a>
                                    </div>

                                    <div className="row g-20">
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card border border-gray-100">
                                                <div className="card-body p-8">
                                                    <a href="course-details.html"
                                                        className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                                        <img src="assets/images/thumbs/course-img1.png" alt="Course Image" />
                                                    </a>
                                                    <div className="p-8">
                                                        <span
                                                            className="text-13 py-2 px-10 rounded-pill bg-success-50 text-success-600 mb-16">Development</span>
                                                        <h5 className="mb-0"><a href="course-details.html"
                                                            className="hover-text-main-600">Full Stack Web Development</a></h5>

                                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                                            <img src="assets/images/thumbs/user-img1.png"
                                                                className="w-28 h-28 rounded-circle object-fit-cover"
                                                                alt="User Image" />
                                                            <div>
                                                                <span className="text-gray-600 text-13">Created by <a
                                                                    href="profile.html"
                                                                    className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert
                                                                    James</a> </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i
                                                                    className="ph ph-video-camera"></i></span>
                                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i
                                                                    className="ph ph-clock"></i></span>
                                                                <span className="text-13 text-gray-600">40 Hours</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i
                                                                    className="ph-fill ph-star"></i></span>
                                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                                            </div>
                                                            <a href="course-details.html"
                                                                className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card border border-gray-100">
                                                <div className="card-body p-8">
                                                    <a href="course-details.html"
                                                        className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                                        <img src="assets/images/thumbs/course-img5.png" alt="Course Image" />
                                                    </a>
                                                    <div className="p-8">
                                                        <span
                                                            className="text-13 py-2 px-10 rounded-pill bg-warning-50 text-warning-600 mb-16">Design</span>
                                                        <h5 className="mb-0"><a href="course-details.html"
                                                            className="hover-text-main-600">Design System</a></h5>

                                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                                            <img src="assets/images/thumbs/user-img5.png"
                                                                className="w-28 h-28 rounded-circle object-fit-cover"
                                                                alt="User Image" />
                                                            <div>
                                                                <span className="text-gray-600 text-13">Created by <a
                                                                    href="profile.html"
                                                                    className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert
                                                                    James</a> </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i
                                                                    className="ph ph-video-camera"></i></span>
                                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i
                                                                    className="ph ph-clock"></i></span>
                                                                <span className="text-13 text-gray-600">40 Hours</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i
                                                                    className="ph-fill ph-star"></i></span>
                                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                                            </div>
                                                            <a href="course-details.html"
                                                                className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="card border border-gray-100">
                                                <div className="card-body p-8">
                                                    <a href="course-details.html"
                                                        className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                                        <img src="assets/images/thumbs/course-img6.png" alt="Course Image" />
                                                    </a>
                                                    <div className="p-8">
                                                        <span
                                                            className="text-13 py-2 px-10 rounded-pill bg-danger-50 text-danger-600 mb-16">Frontend</span>
                                                        <h5 className="mb-0"><a href="course-details.html"
                                                            className="hover-text-main-600">React Native Courese</a></h5>

                                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                                            <img src="assets/images/thumbs/user-img6.png"
                                                                className="w-28 h-28 rounded-circle object-fit-cover"
                                                                alt="User Image" />
                                                            <div>
                                                                <span className="text-gray-600 text-13">Created by <a
                                                                    href="profile.html"
                                                                    className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert
                                                                    James</a> </span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i
                                                                    className="ph ph-video-camera"></i></span>
                                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                                            </div>
                                                            <div className="flex-align gap-4">
                                                                <span className="text-sm text-main-600 d-flex"><i
                                                                    className="ph ph-clock"></i></span>
                                                                <span className="text-13 text-gray-600">40 Hours</span>
                                                            </div>
                                                        </div>

                                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                                            <div className="flex-align gap-4">
                                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i
                                                                    className="ph-fill ph-star"></i></span>
                                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                                            </div>
                                                            <a href="course-details.html"
                                                                className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProfileBar />
                    </div>
                </div>
            </div>
        </main>
    )
}
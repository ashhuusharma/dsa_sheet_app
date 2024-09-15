import { Link } from "react-router-dom";
import Card from "../component/Card";
import DashboardCards from "../component/DashboardCard";
import Header from "../component/Header";
import ProfileBar from "../component/ProfileBar";
import Sidebar from "../component/Sidebar";
import { FaBookOpen } from "react-icons/fa";
import CourseSection from "../component/CourseSection";

export default function Dashboard() {
    return (
        <main className="!bg-[#111111]">
            <Sidebar />
            <div className="dashboard-main-wrapper !bg-[#111111]">
                <Header />
                <div className="dashboard-body !bg-[#111111]">
                    <div className="row gy-4">
                        <div className="col-lg-9">
                            <DashboardCards />
                            <CourseSection/>
                        </div>
                        <ProfileBar />
                    </div>
                </div>
            </div>
        </main>
    )
}
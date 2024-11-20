import { useEffect, useState } from 'react';
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { useParams } from 'react-router-dom';
import { getAxiosWithToken } from '../axios/AxiosObj';

export default function CourseDetail() {
    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { slug, problemId } = useParams(); // Get the slug and problemId from the URL

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const { data } = await getAxiosWithToken({
                    url: `course/${slug}/p/${problemId}`,
                    method: "GET"
                });
                if (data.success) {
                    setCourse(data);
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError('An error occurred while fetching the course.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [slug, problemId]); // Added problemId to the dependency array

    return (
        <main className="!bg-[#111111] dark">
            <Sidebar />
            <div className="dashboard-main-wrapper !bg-[#111111]">
                <Header />
                <div className="dashboard-body !bg-[#111111]">
                    {loading && <p>Loading course details...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {course && (
                        <div className="course-detail-container">
                            <h1 className="font-amaranth text-4xl text-zinc-300 font-bold">{course?.problem?.title}</h1>
                            <div className='!text-white' dangerouslySetInnerHTML={{ __html: course?.content }}></div> {/* Removed JSON.parse */}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

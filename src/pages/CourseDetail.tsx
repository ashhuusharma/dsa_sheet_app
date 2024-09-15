import { useEffect, useState } from 'react';
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { useParams } from 'react-router-dom';
import { getAxiosWithToken } from '../axios/AxiosObj';
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function CourseDetail() {
    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState<any>(true);
    const [error, setError] = useState<any>(null);
    const { slug } = useParams(); // Get the slug from the URL

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const { data } = await getAxiosWithToken({
                    url: `course/${slug}`,
                    method: "GET"
                });
                if (data.success) {
                    setCourse(data);
                } else {
                    setError(data.message);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
            console.log(slug)
        };

        fetchCourse();
    }, [slug]);

    return (
        <main className="!bg-[#111111] dark">
            <Sidebar />
            <div className="dashboard-main-wrapper !bg-[#111111]">
                <Header />
                <div className="dashboard-body !bg-[#111111]">
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {course && (
                        <div className="course-detail-container">
                            <h1 className="font-amaranth text-4xl text-zinc-300 font-bold">{course.course.title}</h1>
                            <p className="text-medium text-white">{course.course.description}</p>

                            <Accordion variant="splitted" itemClasses={{
                                base: 'w-full !mt-6 flex bg-[#1F1F1F] flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] !px-4 !py-0 pb-3 border border-zinc-800',
                                heading: 'accordion-heading',
                                trigger: '!py-3 pb-0',
                                titleWrapper: 'accordion-title-wrapper',
                                title: 'accordion-title',
                                subtitle: 'accordion-subtitle',
                                startContent: 'accordion-start-content',
                                indicator: 'accordion-indicator',
                                content: 'accordion-content !pb-4'
                            }}>
                                <AccordionItem key="1" aria-label="Keywords" title={<p className='text-lg font-bold text-zinc-300'>Keywords</p>} className='text-white'>
                                    {course.keywords.map((keyword: any) => (
                                        <li key={keyword._id} className='text-medium text-white'>{keyword.points}</li>
                                    ))}
                                </AccordionItem>
                            </Accordion>
                            <Accordion variant="splitted" itemClasses={{
                                base: 'w-full !mt-6 flex bg-[#1F1F1F] flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] !px-4 !py-0 border border-zinc-800',
                                heading: 'accordion-heading',
                                trigger: '!py-3 pb-0',
                                titleWrapper: 'accordion-title-wrapper',
                                title: 'accordion-title',
                                subtitle: 'accordion-subtitle',
                                startContent: 'accordion-start-content',
                                indicator: 'accordion-indicator',
                                content: 'accordion-content !pb-4'
                            }}>
                                <AccordionItem key="2" aria-label="Notes" title="Notes" className='text-white'>
                                    <p className='text-medium text-white pb-3'>{course.note?.content}</p>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

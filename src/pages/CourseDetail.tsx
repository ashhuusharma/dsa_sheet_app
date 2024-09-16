import { useEffect, useState } from 'react';
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import { Link, useParams } from 'react-router-dom';
import { getAxiosWithToken } from '../axios/AxiosObj';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { FaLock } from 'react-icons/fa';

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

                            {/* Keywords Section */}
                            <Accordion variant="splitted" itemClasses={{
                                base: 'w-full !mt-6 flex bg-[#1F1F1F] flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] !px-4 !py-0 !pb-1 border border-zinc-800',
                                heading: 'accordion-heading !mb-0',
                                trigger: '!py-3 pb-0',
                                content: 'accordion-content !pb-4'
                            }}>
                                <AccordionItem key="1" aria-label="Keywords" title={<p className='text-lg font-bold text-zinc-300'>Keywords</p>} className='text-white'>
                                    {course.keywords.map((keyword: any) => (
                                        <li key={keyword._id} className='text-medium text-white'>{keyword.points}</li>
                                    ))}
                                </AccordionItem>
                            </Accordion>

                            {/* Notes Section */}
                            <Accordion variant="splitted" itemClasses={{
                                base: 'w-full !mt-6 flex bg-[#1F1F1F] flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] !px-4 !py-0 !pb-1 border border-zinc-800',
                                heading: 'accordion-heading !mb-0',
                                trigger: '!py-3 pb-0',
                                content: 'accordion-content !pb-4'
                            }}>
                                <AccordionItem key="2" aria-label="Notes" title={<p className='text-lg font-bold text-zinc-300'>Notes</p>} className='text-white'>
                                    <p className='text-medium text-white pb-3'>{course.note?.content}</p>
                                </AccordionItem>
                            </Accordion>

                            {/* Topics Section */}
                            <h1 className="font-amaranth !text-3xl text-white font-bold !mt-8">{"Topics"}</h1>
                            <Accordion variant="splitted" itemClasses={{
                                base: 'w-full !mt-6 flex bg-[#1F1F1F] flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] !px-4 !py-0 !pb-1 border border-zinc-800',
                                heading: 'accordion-heading !mb-0',
                                trigger: '!py-3 pb-0',
                                content: 'accordion-content !pb-4'
                            }}>
                                {course.topics.map((topic: any) => (
                                    <AccordionItem
                                        key={topic.topicId}
                                        aria-label={topic.title}
                                        title={<p className='text-lg font-bold text-zinc-300'>{topic.title}</p>}
                                        className='text-white'
                                    >
                                        {topic.subtopics.map((subtopic: any) => (
                                            <Accordion variant="splitted" itemClasses={{
                                                base: 'w-full !mt-1 flex bg-[#1F1F1F] flex-col shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] !px-4 !py-0 !pb-1 border border-zinc-800',
                                                heading: 'accordion-heading !mb-0',
                                                trigger: '!py-3 pb-0',
                                                content: 'accordion-content !pb-4'
                                            }}>
                                                <AccordionItem
                                                    key={subtopic.title}
                                                    aria-label={subtopic.title}
                                                    title={<p className='text-lg font-bold text-zinc-300'>{subtopic.title}</p>}
                                                    className='text-white'
                                                >
                                                    {subtopic.problems.map((problem: any) => (
                                                        <div key={problem.problemId} className='pl-6 mt-2'>
                                                            <table className="table-auto w-full divide-y divide-gray-200">
                                                                <thead className="text-xs uppercase text-[#8C8C8C]">
                                                                    <tr>
                                                                        <th className="px-2 border-r-2 dark:border-dark_40 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                                            <p className="font-semibold text-center">Status</p>
                                                                        </th>
                                                                        <th className="px-2 border-r-2 dark:border-dark_40 w-1/3 first:pl-10 last:pr-10 py-3 whitespace-nowrap">
                                                                            <p className="font-semibold flex items-start">Problem</p>
                                                                        </th>
                                                                        <th className="px-2 border-r-2 dark:border-dark_40 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                                            <p className="font-semibold text-center">Article</p>
                                                                        </th>
                                                                        <th className="px-2 border-r-2 dark:border-dark_40 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                                            <p className="font-semibold">Youtube</p>
                                                                        </th>
                                                                        <th className="px-2 border-r-2 dark:border-dark_40 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                                            <p className="font-semibold text-center">Practice</p>
                                                                        </th>
                                                                        <th className="px-3 border-r-2 dark:border-dark_40 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                                            <p className="font-semibold text-center">Note</p>
                                                                        </th>
                                                                        <th className="px-1 border-r-2 dark:border-dark_40 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                                                            <p className="font-semibold text-center">Difficulty</p>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="text-[13px]">
                                                                    <tr className="border-t-2 border-b-2 last:border-b-0 dark:border-dark_40">
                                                                        <td className="px-2 first:pl-5 last:pr-5 py-4 whitespace-nowrap flex justify-center items-center">
                                                                            <input
                                                                                id="srinpttpt" name="complete" type="checkbox"
                                                                                className="!w-6 !h-6 form-checkbox text-brand_50 cursor-pointer rounded bg-zinc-800"
                                                                            />
                                                                        </td>
                                                                        <td className="px-2 border-l-2 dark:border-dark_40 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                                            <div className="!px-3 font-medium cursor-pointer text-zinc-200 flex justify-start items-start">
                                                                                <Link to={`${problem.problemId}`} className='!text-white' target="_blank" rel="noreferrer">
                                                                                    {problem.title}
                                                                                </Link>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-2 border-l-2 dark:border-dark_40 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                                            <Link to={`${problem.problemId}`} target="_blank" rel="noreferrer"
                                                                                className="flex justify-center items-center text-zinc-300">
                                                                                <MdArticle className='!w-6 !h-6 text-white' />
                                                                            </Link>
                                                                        </td>
                                                                        <td className="px-2 border-l-2 dark:border-dark_40 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                                            {problem.youtubeLink ? (
                                                                                <div className="flex justify-center items-center">
                                                                                    <div className="cursor-pointer">
                                                                                        <Link to={problem.youtubeLink}>
                                                                                            <FaYoutube className='!w-6 !h-6 text-red-600' />
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                <p className="text-white">Coming soon...</p>
                                                                            )}
                                                                        </td>
                                                                        <td className="px-2 border-l-2 dark:border-dark_40 first:pl-5 last:pr-5 py-4 whitespace-nowrap">
                                                                            {problem.geeksForGeeksLink ? (
                                                                                <div className="flex justify-center items-center">
                                                                                    <Link to={problem.geeksForGeeksLink}>
                                                                                        <SiGeeksforgeeks className='!w-6 !h-6 text-green-600' />
                                                                                    </Link>
                                                                                </div>
                                                                            ) : problem.articleLink ? (
                                                                                <div className="flex justify-center items-center">
                                                                                    <Link to={problem.articleLink}>
                                                                                        <SiCodingninjas className='!w-6 !h-6 text-orange-600' />
                                                                                    </Link>
                                                                                </div>
                                                                            ) : (
                                                                                <p className="text-white">Coming soon...</p>
                                                                            )}
                                                                        </td>
                                                                        <td className="px-2 border-l-2 border-r-2 dark:border-dark_40 first:pl-5 last:pr-4 py-4 whitespace-nowrap">
                                                                            {problem.notes ? (
                                                                                <div className="flex justify-center cursor-pointer items-center">
                                                                                    <div className="bg-light_50 dark:bg-dark_50 text-zinc-300 rounded-lg p-1">
                                                                                        <FaLock className="!text-gray-400 !ml-2 !w-6 !h-6" title="Locked" />
                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                <p className="text-white">Coming soon...</p>
                                                                            )}
                                                                        </td>
                                                                        <td className="px-2 dark:border-dark_40 first:pl-5 flex justify-center items-center last:pr-5 py-4 whitespace-nowrap">
                                                                            {problem.difficulty ? (
                                                                                <div
                                                                                    className={`font-medium rounded-full text-center px-4 py-1 ${problem.difficulty === 1 ? "bg-green-200 text-green-600 dark:bg-[#0B2816]" :
                                                                                        problem.difficulty === 2 ? "bg-yellow-200 text-yellow-600 dark:bg-[#482200]" :
                                                                                            problem.difficulty === 3 ? "bg-red-200 text-red-500 dark:bg-[#470C08]" :
                                                                                                "bg-gray-200 text-gray-600 dark:bg-[#1F1F1F]"
                                                                                        }`}
                                                                                >
                                                                                    {problem.difficulty === 1 ? "Easy" :
                                                                                        problem.difficulty === 2 ? "Medium" :
                                                                                            problem.difficulty === 3 ? "Hard" :
                                                                                                "Unknown"}
                                                                                </div>
                                                                            ) : (
                                                                                <p className="text-white">Coming soon...</p>
                                                                            )}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    ))}
                                                </AccordionItem>
                                            </Accordion>
                                        ))}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

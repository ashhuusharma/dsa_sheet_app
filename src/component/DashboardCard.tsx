import { FaBookOpen } from 'react-icons/fa'; // For the icon
import Card from './Card'; // Assuming Card component is already implemented
import { PiCertificateFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";

// Define card data array
const cardData = [
    {
        icon: <FaBookOpen className="!w-4 !h-4" />,
        title: 'Complete Course',
        value: 155,
        bgcolor: '!bg-[#3e80f9]',
    },
    {
        icon: <PiCertificateFill className="!w-4 !h-4" />,
        title: 'Earned Certificate',
        value: 39,
        bgcolor: 'bg-main-two-600',
    },
    {
        icon: <FaGraduationCap className="!w-4 !h-4" />,
        title: 'Course in Progress',
        value: 25,
        bgcolor: 'bg-purple-600',
    },
    {
        icon: <MdGroups2 className="!w-4 !h-4" />,
        title: 'Community Support',
        value: '18k',
        bgcolor: 'bg-warning-600',
    }
];

const DashboardCards: React.FC = () => {
    return (
        <div className="row gy-4">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    bgcolor={card.bgcolor}
                />
            ))}
        </div>
    );
};

export default DashboardCards;

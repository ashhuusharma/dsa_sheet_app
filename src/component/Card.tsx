import React from 'react';

// Define the props interface for the Card component
interface CardProps {
  title: string;
  value: number | string; // Could be a number or string, depending on the use case
  icon: React.ReactNode; // Icon could be an element or component
  bgcolor?: string; // Optional background color, as it might not always be provided
}

const Card: React.FC<CardProps> = ({ title, value, icon, bgcolor }) => {
  return (
    <div className="col-xxl-3 col-sm-6">
      <div className="card !bg-[#1F1F1F] !border !border-zinc-800 !text-white">
        <div className="card-body">
          <h4 className="!mb-2 !text-white !font-bold !text-[28px]">{value}+</h4>
          <span className=" !text-white !text-[16px]">{title}</span>
          <div className="flex-between !gap-8 !mt-3">
            <span
              className={`flex-shrink-0 !w-12 !h-12 flex-center rounded-full ${bgcolor} text-white text-2xl`}
            >
              {icon}
            </span>
            <div id="complete-course" className="remove-tooltip-title rounded-tooltip-value"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

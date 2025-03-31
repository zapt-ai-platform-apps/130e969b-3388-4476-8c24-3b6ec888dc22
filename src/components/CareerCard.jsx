import React from 'react';
import { FaGraduationCap, FaDollarSign, FaChartLine } from 'react-icons/fa';

const CareerCard = ({ career, rank }) => {
  return (
    <div className="card">
      <div className="bg-indigo-700 text-white px-4 py-2 font-semibold flex justify-between items-center">
        <span className="text-xl">{career.title}</span>
        <span className="bg-white text-indigo-800 h-8 w-8 rounded-full flex items-center justify-center font-bold">
          {rank}
        </span>
      </div>
      
      <div className="p-5">
        <p className="text-gray-600 mb-4">{career.description}</p>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <FaDollarSign className="text-green-600 mr-2" />
            <span className="text-sm font-medium">Median Salary: </span>
            <span className="text-sm ml-1">{career.medianSalary}</span>
          </div>
          
          <div className="flex items-center">
            <FaChartLine className="text-blue-600 mr-2" />
            <span className="text-sm font-medium">Growth Outlook: </span>
            <span className="text-sm ml-1">{career.growthOutlook}</span>
          </div>
          
          <div className="flex items-center">
            <FaGraduationCap className="text-indigo-600 mr-2" />
            <span className="text-sm font-medium">Education: </span>
            <span className="text-sm ml-1">{career.education}</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {career.skills.map((skill, index) => (
            <span key={index} className="badge badge-primary">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
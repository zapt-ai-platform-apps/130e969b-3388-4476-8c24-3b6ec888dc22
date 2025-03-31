import React from 'react';
import CareerCard from './CareerCard';
import { careers } from '../data/careers';

const TopCareers = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-900">
        Your Top 10 Career Choices
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        Based on current job market trends, growth projections, and overall career satisfaction, 
        here are the top career paths to consider in today's economy.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2">
        {careers.map((career, index) => (
          <CareerCard 
            key={career.id} 
            career={career} 
            rank={index + 1} 
          />
        ))}
      </div>
    </div>
  );
};

export default TopCareers;
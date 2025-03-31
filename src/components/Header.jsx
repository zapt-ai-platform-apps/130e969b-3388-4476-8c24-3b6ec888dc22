import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-800 text-white py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Career Discovery</h1>
        <p className="text-indigo-100 text-lg">
          Explore your top career choices based on current job market trends.
        </p>
      </div>
    </header>
  );
};

export default Header;
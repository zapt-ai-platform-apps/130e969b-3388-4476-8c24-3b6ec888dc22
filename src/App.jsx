import React from 'react';
import TopCareers from './components/TopCareers';
import Header from './components/Header';
import ZaptBadge from './components/ZaptBadge';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <TopCareers />
      </main>
      <ZaptBadge />
    </div>
  );
}
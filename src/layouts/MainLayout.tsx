'use client';

import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {children}
    </div>
  );
};

export default MainLayout;

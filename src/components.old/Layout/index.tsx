'use client'

import React from 'react';

// layout full screen
// if > 1024 then have left menu with 240px width
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const [Sibedar, ...restChildren] = React.Children.toArray(children);
  return (
    <div className='flex flex-row'>
      {children[0]}
      <main>
        {React.Children.toArray(children).slice(1).map((child, index) => (
          <div key={index}>
            {child}
          </div>
        ))}
      </main>
    </div>
  );
}

export default Layout;

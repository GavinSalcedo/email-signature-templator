import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex">{children}</main>;
}

export default MainLayout;

import React from 'react';

function MainLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex w-screen m-0 p-0 box-border">{children}</main>;
}

export default MainLayout;

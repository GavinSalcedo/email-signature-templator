import React from 'react';

function TabContentLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-12 p-12">{children}</div>;
}

export default TabContentLayout;

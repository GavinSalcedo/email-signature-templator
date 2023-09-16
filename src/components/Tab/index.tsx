import { useState } from 'react';
import Tab2 from './Tab2.tsx';

enum TAB {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
}

function Tab() {
  const [activeTab, setActiveTab] = useState<TAB>(TAB.FIRST);

  const handleTabClick = (tabNumber: TAB) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-max">
      <div className="flex tab-container text-white">
        <TabButton onClick={() => handleTabClick(TAB.FIRST)} active={activeTab === TAB.FIRST}>
          Tab 1
        </TabButton>
        <TabButton onClick={() => handleTabClick(TAB.SECOND)} active={activeTab === TAB.SECOND}>
          Tab 2
        </TabButton>
        <TabButton onClick={() => handleTabClick(TAB.THIRD)} active={activeTab === TAB.THIRD}>
          Tab 3
        </TabButton>
        <TabButton onClick={() => handleTabClick(TAB.FOURTH)} active={activeTab === TAB.FOURTH}>
          Tab 4
        </TabButton>
      </div>

      <span className="text-black tab-content">
        {activeTab === TAB.FIRST && <div>Content for Tab 1</div>}
        {activeTab === TAB.SECOND && <Tab2 />}
        {activeTab === TAB.THIRD && <div>Content for Tab 3</div>}
        {activeTab === TAB.FOURTH && <div>Content for Tab 4</div>}
      </span>
    </div>
  );
}

function TabButton({
  children,
  onClick,
  active,
}: {
  children: string | React.ReactNode;
  onClick: () => void;
  active: boolean;
}) {
  return (
    <div
      className={`p-6 cursor-pointer ${active ? 'bg-slate-800' : 'bg-slate-600'} transition-all duration-300`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Tab;

import { useState } from 'react';

function Tab() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-max">
      <div className="flex tab-container text-black">
        <TabButton onClick={() => handleTabClick(0)} active={activeTab === 0}>
          Tab 1
        </TabButton>
        <TabButton onClick={() => handleTabClick(1)} active={activeTab === 1}>
          Tab 2
        </TabButton>
        <TabButton onClick={() => handleTabClick(2)} active={activeTab === 2}>
          Tab 3
        </TabButton>
        <TabButton onClick={() => handleTabClick(3)} active={activeTab === 3}>
          Tab 4
        </TabButton>
      </div>

      <div className="text-black tab-content">
        {activeTab === 0 && <div>Content for Tab 1</div>}
        {activeTab === 1 && <div>Content for Tab 2</div>}
        {activeTab === 2 && <div>Content for Tab 3</div>}
        {activeTab === 3 && <div>Content for Tab 4</div>}
      </div>
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

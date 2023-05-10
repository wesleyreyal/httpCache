import { Tab } from './tab';
import React, { useEffect, useState } from 'react';

type tabbarProps = {
  tabsName: string[];
};

export const Tabbar: React.FC<tabbarProps> = ({ tabsName }) => {
  const [focusedTab, setFocusedTab] = useState(0);
  const [tabs, setTabs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setTabs(
      tabsName.map((name, idx) => (
        <Tab
          text={name}
          key={idx}
          handleClick={() => {
            setFocusedTab(idx);
          }}
          className={focusedTab === idx ? 'tab-active' : ''}
        />
      ))
    );
  }, [focusedTab, tabsName]);

  return <div className="tabs">{tabs}</div>;
};

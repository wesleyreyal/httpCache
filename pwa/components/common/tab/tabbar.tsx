import { Tab } from './tab';
import React, { useEffect, useState } from 'react';

type tabbarProps = {
  tabsName: string[];
  className?: string;
  handleClick?: (id: number) => void;
};

export const Tabbar: React.FC<tabbarProps> = ({ tabsName, className, handleClick }) => {
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
            handleClick?.(idx);
          }}
          className={focusedTab === idx ? 'tab-active' : ''}
        />
      ))
    );
  }, [focusedTab, tabsName]);

  return <div className={`tabs ${className}`}>{tabs}</div>;
};

'use client';
import React from 'react';
import RadixTabs from '../common/radix-tabs';

interface NotifyBarProps {
  id?: number;
  type?: '1:1' | 'group';
  tabLabels: string[];
  tabContents: React.ReactNode[];
}

const NotifyBar = ({ tabLabels, tabContents }: NotifyBarProps) => {
  return (
    <div className="mb-4">
      <RadixTabs tabLabels={tabLabels} tabContents={tabContents} />
    </div>
  );
};

export default NotifyBar;

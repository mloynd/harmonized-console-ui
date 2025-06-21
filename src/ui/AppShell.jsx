import React, { useState } from 'react';
import ChatPanel from './ChatPanel.jsx';
import RightPanelTabs from './RightPanelTabs.jsx';

export default function AppShell() {
  const [sessionId] = useState(() => "default");
  return (
    <div className="h-screen w-screen grid grid-cols-[2fr_1fr]">
      <ChatPanel sessionId={sessionId} />
      <RightPanelTabs sessionId={sessionId} />
    </div>
  );
}

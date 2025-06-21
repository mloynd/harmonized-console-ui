import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ChatPanel from './ChatPanel';
import RightPanel from './RightPanel';
import './index.css';

function App() {
  const [sessionId] = useState(() => "default");

  return (
    <div className="grid grid-cols-2 h-screen">
      <ChatPanel sessionId={sessionId} />
      <RightPanel sessionId={sessionId} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

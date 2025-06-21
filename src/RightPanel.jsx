import React, { useEffect, useState } from 'react';

export default function RightPanel({ sessionId }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch(`https://your-mcp-server.onrender.com/logs/${sessionId}`)
      .then(res => res.json())
      .then(setLogs)
      .catch(err => console.error('Failed to load logs', err));
  }, [sessionId]);

  return (
    <div className="p-4 space-y-2 overflow-y-auto h-full">
      <h2 className="text-lg font-semibold">Session Logs</h2>
      {logs.map((log, idx) => (
        <div key={idx} className="p-2 border rounded text-sm bg-gray-50">
          <div><strong>Input:</strong> {log.input}</div>
          <div><strong>Route:</strong> {log.route}</div>
          <div><strong>Response:</strong> {JSON.stringify(log.response)}</div>
          <div className="text-xs text-gray-400">{log.timestamp}</div>
        </div>
      ))}
    </div>
  );
}

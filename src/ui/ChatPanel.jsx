import React, { useState } from 'react';

export default function ChatPanel({ sessionId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://bridge-y5on.onrender.com/bridge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input, session_id: sessionId })
      });
      const data = await response.json();
      const reply = data.reply || JSON.stringify(data, null, 2);
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: '⚠️ Error connecting to bridge.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col border-r h-full bg-white">
      <div className="flex-none p-4 text-xl font-semibold border-b bg-gray-50">🔥 Council Fire HAIOS</div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-3 rounded-lg max-w-xl whitespace-pre-wrap ${msg.role === 'user' ? 'bg-blue-100 self-end text-right' : 'bg-green-100 self-start text-left'}`}>
            <div className="text-xs text-gray-500">{msg.role}</div>
            {msg.content}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-400">Assistant is typing...</div>}
      </div>
      <div className="flex-none p-4 border-t flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} className="flex-1 border rounded px-3 py-2" placeholder="Ask or instruct..." />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700">Send</button>
      </div>
    </div>
  );
}

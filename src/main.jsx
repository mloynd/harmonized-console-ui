import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="h-screen flex items-center justify-center text-center text-gray-700">
      <div>
        <h1 className="text-2xl font-bold mb-2">ShadCN Console UI</h1>
        <p>This is the starter shell. Next: real components!</p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

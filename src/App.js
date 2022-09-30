import './App.css';
import { useEffect, useState } from 'react';

function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(
      'wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'
    );
    ws.onopen = (e) => {
      console.log('connected', e);
    };

    ws.onmessage = (e) => {
      if (isJsonString(e.data)) {
        setMessages((messages) => [...messages, JSON.parse(e.data).webuser]);
      } else {
        setMessages((messages) => [...messages, e.data]);
      }
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          {messages?.map((val) => (
            <li key={new Date().toString}>
              <span>{val}</span>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

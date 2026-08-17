import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [activeMode, setActiveMode] = useState("normal");

  const sendMessage = () => {
    if (message.trim() === "") return;

    const userMessage = {
      text: message,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setChatHistory((prev) => [...prev, message]);

    const currentMessage = message;
    setMessage("");

    setTimeout(() => {
      let reply;

      if (activeMode === "student") {
        reply =
          "🎓 Student Mode is active! I can help you with study plans, concepts, notes and exam preparation.";
      } else if (activeMode === "coding") {
        reply =
          "💻 Coding Mode is active! I can help you with programming, debugging, code explanation and projects.";
      } else {
        reply =
          "Hello! 👋 I am NEXA AI. How can I help you?";
      }

      const aiMessage = {
        text: reply,
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 800);
  };

  const newChat = () => {
    setMessages([]);
    setMessage("");
  };

  const changeMode = (mode) => {
    setActiveMode(mode);
  };

  const getWelcomeTitle = () => {
    if (activeMode === "student") {
      return "What are we studying today?";
    }

    if (activeMode === "coding") {
      return "What are we coding today?";
    }

    return "How can I help you?";
  };

  const getWelcomeText = () => {
    if (activeMode === "student") {
      return "Ask me about your subjects, exams or coding.";
    }

    if (activeMode === "coding") {
      return "Ask me about programming, debugging or projects.";
    }

    return "Ask NEXA anything.";
  };

  const getPlaceholder = () => {
    if (activeMode === "student") {
      return "Ask about your studies...";
    }

    if (activeMode === "coding") {
      return "Ask about coding...";
    }

    return "Ask NEXA anything...";
  };

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">

        <h2>⚡ NEXA AI</h2>

        <button className="new-chat" onClick={newChat}>
          ＋ New Chat
        </button>

        {/* Student Mode */}
        <button
          className={`mode-button ${
            activeMode === "student" ? "active" : ""
          }`}
          onClick={() => changeMode("student")}
        >
          🎓 Student Mode
        </button>

        {/* Coding Mode */}
        <button
          className={`mode-button ${
            activeMode === "coding" ? "active" : ""
          }`}
          onClick={() => changeMode("coding")}
        >
          💻 Coding Mode
        </button>

        {/* Recent Chats */}
        <div className="chat-history">
          <h3>Recent Chats</h3>

          {chatHistory.map((chat, index) => (
            <p key={index}>
              {chat.length > 25
                ? chat.substring(0, 25) + "..."
                : chat}
            </p>
          ))}
        </div>

        {/* Bottom */}
        <div className="sidebar-bottom">
          <p>⚙️ Settings</p>
          <p>👤 Profile</p>
        </div>

      </aside>


      {/* Main Chat */}
      <main className="chat-area">

        {/* Header */}
        <header className="chat-header">

          <div>
            <h1>NEXA AI</h1>
            <span>Your AI Assistant</span>
          </div>

          {activeMode === "student" && (
            <span className="mode-badge">
              🎓 Student Mode
            </span>
          )}

          {activeMode === "coding" && (
            <span className="mode-badge">
              💻 Coding Mode
            </span>
          )}

        </header>


        {/* Messages */}
        <section className="messages">

          {messages.length === 0 && (
            <div className="welcome">

              <h2>{getWelcomeTitle()}</h2>

              <p>{getWelcomeText()}</p>

            </div>
          )}


          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}

        </section>


        {/* Input */}
        <div className="input-area">

          <input
            type="text"
            placeholder={getPlaceholder()}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>
            ➤
          </button>

        </div>

      </main>

    </div>
  );
}

export default App;
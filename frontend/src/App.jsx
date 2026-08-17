function App() {
  return (
    <div
      style={{
        background: "#0F172A",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "60px", margin: "0" }}>NEXA AI</h1>

      <p style={{ fontSize: "22px", color: "#94A3B8" }}>
        Ask. Learn. Create.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 35px",
          fontSize: "18px",
          background: "#3B82F6",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
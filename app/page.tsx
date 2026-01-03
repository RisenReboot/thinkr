export default function Home() {
  return (
    <main
      style={{
        padding: "3rem",
        fontFamily: "system-ui",
        minHeight: "100vh",
        backgroundColor: "#f9fefe",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#0fb9b1",
          fontWeight: 700,
        }}
      >
        ThinkR
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          maxWidth: "520px",
          marginTop: "1rem",
        }}
      >
        Study smarter. Learn your way.
      </p>

      <button
        style={{
          marginTop: "2.5rem",
          padding: "0.9rem 1.8rem",
          fontSize: "1rem",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#0fb9b1",
          color: "white",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </main>
  );
}

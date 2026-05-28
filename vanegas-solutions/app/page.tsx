export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0A0A0F",
        minHeight: "100vh",
        color: "white",
        padding: "40px 20px",
        fontFamily: "system-ui, sans-serif",
      }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Vanegas Solutions
      </h1>
      <p>Si ves esto en iPhone, el problema no es el código de la página.</p>
      <p>Si NO ves esto en iPhone, el problema es Next.js o el servidor.</p>
    </main>
  );
}

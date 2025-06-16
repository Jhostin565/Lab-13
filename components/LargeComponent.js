export default function LargeComponent() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f4" }}>
      <h2>Componente Pesado</h2>
      <p>Este componente se cargó de forma diferida (lazy loading).</p>
    </div>
  );
}

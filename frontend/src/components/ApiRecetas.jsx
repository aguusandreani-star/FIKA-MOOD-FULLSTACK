import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/products";

function ApiRecetas() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  return (
    <section id="productos-db" style={{ padding: "40px" }}>

      <h2 style={{ textAlign: "center", marginBottom: "30px",font:"Jost", fontSize:"48px", color:"#E9AE4B"
       }}>
        Recetas Especiales Fika Mood
      </h2>

      {loading && (
        <p style={{ textAlign: "center" }}>Cargando productos...</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px"
        }}
      >

        {productos.map((producto) => (

          <div
            key={producto._id}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 6px 18px rgba(0,0,0,0.12)"
            }}
          >

            {/* IMAGEN SUPERIOR */}
            {producto.image && (
              <img
                src={producto.image}
                alt={producto.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover"
                }}
              />
            )}

            {/* CONTENIDO */}
            <div
              style={{
                padding: "20px",
                position: "relative",
                backgroundColor: "#fff",
                minHeight: "200px"
              }}
            >

              {/* HOJAS ABAJO GRANDES */}
           <img
  src="/images/hojas.png"
  alt="decoración hojas"
  style={{
    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "110%",          // antes 70%
    height: "180px",       // antes 100px
    objectFit: "contain",
    opacity: 0.18,
    pointerEvents: "none",
    zIndex: 1
  }}
/>

              {/* TEXTO */}
              <div style={{ position: "relative", zIndex: 2 }}>

                <h3>{producto.name}</h3>

                <p style={{ color: "#555" }}>
                  {producto.description}
                </p>

                <p>
                  <strong>Precio:</strong> ${producto.price}
                </p>

                <p>
                  <strong>Categoría:</strong>{" "}
                  {producto.category?.name || "Sin categoría"}
                </p>

                <p>
                  <strong>Stock:</strong> {producto.stock}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ApiRecetas;
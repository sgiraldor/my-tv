import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import seriesData from "../data/series";

function DetalleSerie() {
  const { id } = useParams();
  const serieId = parseInt(id);

  const [serie, setSerie] = useState(null);
  const [mostrarTrailer, setMostrarTrailer] = useState(false);
  const [likes, setLikes] = useState(0);
  const [votosTotales, setVotosTotales] = useState(0);

  // Cargar datos desde localStorage o fallback al archivo
  useEffect(() => {
    const datosGuardados = localStorage.getItem(`serie_${serieId}`);
    const datosSerie = seriesData.find((s) => s.id === serieId);

    if (!datosSerie) return;

    if (datosGuardados) {
      const parsed = JSON.parse(datosGuardados);
      setSerie({ ...datosSerie, ...parsed });
      setLikes(parsed.likes);
      setVotosTotales(parsed.votosTotales);
    } else {
      setSerie(datosSerie);
      setLikes(datosSerie.likes);
      setVotosTotales(datosSerie.votosTotales);
    }
  }, [serieId]);

  const porcentajeGusto =
    votosTotales > 0 ? Math.round((likes / votosTotales) * 100) : 0;

  const guardarEnLocalStorage = (nuevosLikes, nuevosVotos) => {
    const datos = { likes: nuevosLikes, votosTotales: nuevosVotos };
    localStorage.setItem(`serie_${serieId}`, JSON.stringify(datos));
  };

  const votar = (tipo) => {
    const nuevosVotos = votosTotales + 1;
    const nuevosLikes = tipo === "like" ? likes + 1 : likes;
    setLikes(nuevosLikes);
    setVotosTotales(nuevosVotos);
    guardarEnLocalStorage(nuevosLikes, nuevosVotos);
  };

  if (!serie) {
    return (
      <p style={{ textAlign: "center", color: "white" }}>Serie no encontrada</p>
    );
  }

  return (
    <div style={{ padding: "40px", color: "white", textAlign: "center" }}>
      {!mostrarTrailer ? (
        <img
          src={serie.imagen}
          alt={serie.titulo}
          onClick={() => setMostrarTrailer(true)}
          style={{
            width: "300px",
            borderRadius: "10px",
            boxShadow: "0 0 20px green",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        />
      ) : (
        <iframe
          width="560"
          height="315"
          src={serie.trailer}
          title="Tráiler"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            marginTop: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 20px green",
          }}
        ></iframe>
      )}

      <h2 style={{ color: "#b6ffb6", marginTop: "20px" }}>{serie.titulo}</h2>

      <p style={{ maxWidth: "600px", margin: "0 auto", marginTop: "15px" }}>
        {serie.descripcion}
      </p>

      <p style={{ marginTop: "20px" }}>
        <strong>👍 {porcentajeGusto}%</strong> de las personas disfrutaron esta
        serie.
      </p>

      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>¿Te gustó esta serie?</strong>
        </p>
        <button
          onClick={() => votar("like")}
          style={{
            marginRight: "10px",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#2f7d2f",
            color: "white",
            border: "none",
          }}
        >
          👍 Sí
        </button>
        <button
          onClick={() => votar("dislike")}
          style={{
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#800000",
            color: "white",
            border: "none",
          }}
        >
          👎 No
        </button>
      </div>
    </div>
  );
}

export default DetalleSerie;

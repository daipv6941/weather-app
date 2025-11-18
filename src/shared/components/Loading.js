// src/shared/components/Loading.js
import React from "react";

const Loading = () => (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <div className="spinner"></div>
    <p>Loading...</p>
    <style jsx>{`
      .spinner {
        border: 4px solid rgba(0,0,0,0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #09f;
        animation: spin 1s linear infinite;
        margin: 0 auto 10px;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default Loading;

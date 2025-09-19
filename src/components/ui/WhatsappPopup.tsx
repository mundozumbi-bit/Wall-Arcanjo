import React, { useState, useEffect } from "react";

const whatsappNumber = "+5511952181320";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

export default function WhatsappPopup() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timerIn = setTimeout(() => setVisible(true), 3000);
    let timerOut: NodeJS.Timeout;
    if (visible) {
      timerOut = setTimeout(() => setFadeOut(true), 3000);
    }
    return () => {
      clearTimeout(timerIn);
      if (timerOut) clearTimeout(timerOut);
    };
  }, [visible]);

  useEffect(() => {
    let timerRemove: NodeJS.Timeout;
    if (fadeOut) {
      timerRemove = setTimeout(() => setVisible(false), 500);
    }
    return () => {
      if (timerRemove) clearTimeout(timerRemove);
    };
  }, [fadeOut]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        right: "1.5rem",
        bottom: "5.5rem",
        zIndex: 100,
        background: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
        padding: "1.2rem 1.6rem 1.2rem 1.2rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        minWidth: "260px",
        maxWidth: "19vw",
        fontFamily: "var(--font-body, 'FuturaLight', Arial, sans-serif)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease"
      }}
    >
      
      <div style={{flex: 1}}>
        <div style={{fontWeight: 700, fontSize: "1.1rem", color: "#25D366"}}>Bem-vindo(a)!</div>
        <div style={{fontSize: "0.98rem", color: "#222", marginTop: 2}}>Fale conosco no WhatsApp para tirar dúvidas ou agendar seu horário.</div>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        style={{
          background: "#25D366",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 8,
          boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#25D366"/>
          <path d="M23.5 18.5c-.3-.2-1.8-.9-2.1-1-..." fill="#fff"/>
          <path d="M16 6C10.5 6 6 10.5 6 16c0 2.1.7 4.1 2 5.8L6 26l4.3-2c1.6 1 3.5 1.6 5.7 1.6 5.5 0 10-4.5 10-10S21.5 6 16 6zm0 18c-2 0-3.8-.5-5.3-1.5l-.4-.2-2.5 1 1-2.4-.2-.4C8.5 19.8 8 17.9 8 16c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" fill="#fff"/>
        </svg>
      </a>
    </div>
  );
}
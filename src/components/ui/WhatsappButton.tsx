import React from "react";

const whatsappNumber = "+5511952181320";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

export default function WhatsappButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      style={{
        position: "fixed",
        right: "1.5rem",
        bottom: "1.5rem",
        zIndex: 50,
        background: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        transition: "box-shadow 0.2s",
      }}
      className="hover:shadow-xl"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#25D366"/>
        <path d="M23.5 18.5c-.3-.2-1.8-.9-2.1-1-..." fill="#fff"/>
        <path d="M16 6C10.5 6 6 10.5 6 16c0 2.1.7 4.1 2 5.8L6 26l4.3-2c1.6 1 3.5 1.6 5.7 1.6 5.5 0 10-4.5 10-10S21.5 6 16 6zm0 18c-2 0-3.8-.5-5.3-1.5l-.4-.2-2.5 1 1-2.4-.2-.4C8.5 19.8 8 17.9 8 16c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" fill="#fff"/>
      </svg>
    </a>
  );
}
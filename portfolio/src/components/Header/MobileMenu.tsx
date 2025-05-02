"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-3xl focus:outline-none"
        aria-label="Abrir menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu Lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-orange-tertiary dark:bg-green-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 p-6 flex flex-col gap-6`}
      >
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        {/* Pode adicionar outros itens se quiser */}
      </div>

      {/* Overlay (escurece fundo) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}
    </>
  );
}

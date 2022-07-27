import React from "react";

export default function Footer() {
  return (
    <footer className="z-50 flex flex-col items-center justify-between px-6 py-4 bg-gray-800 sm:flex-row">
      <span
        href="#"
        className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
      >
        Fernando Salcedo
      </span>

      <p className="py-2 text-gray-800 dark:text-white sm:py-0">
        All rights reserved
      </p>
    </footer>
  );
}

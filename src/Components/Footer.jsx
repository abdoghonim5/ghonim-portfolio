import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 flex flex-col items-center mt-8">
      <div className="flex space-x-6 mb-2">
        <a
          href="https://www.linkedin.com/in/theghonim/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://github.com/abdoghonim5"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
      </div>
      <span className="text-xs text-gray-400">
        &copy; {new Date().getFullYear()} abdoghonim5. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 text-center">
        <a href="#" className="text-3xl font-bold">
          BRO<span className="text-red-500">FIED</span>
        </a>
        <p className="mt-2 text-gray-400">Scripting visual revolutions since 2017</p>
        
        <div className="flex justify-center space-x-6 mt-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-youtube text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-vimeo text-xl"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
        
        <div className="mt-8 text-gray-500 text-sm">
          <p>© 2025 BROFIED MEDIA | Cinematic Video Production</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
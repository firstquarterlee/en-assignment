import React from 'react';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center max-w-full justify-between w-full h-fit py-[2.5vmin] transition-all ease-in-out delay-100 duration-500 text-black lg:py-2 lg:h-fit z-[999998] bg-white/80 backdrop-blur-md translate-y-0">
      <div className="section-container flex items-center justify-between w-full">
        {/* 로고 */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="이엔미디어 로고" className="lg:w-36 w-28 mx-auto" />
        </a>
        {/* 헤더 */}
        <nav className="whitespace-nowrap hidden lg:flex text-base font-medium space-x-8">
          <a href="#" className="navText after:hover:border-yellow-400 text-black">HOME</a>
          <a href="#" className="navText after:hover:border-yellow-400 text-black">ABOUT</a>
          <a href="#" className="navText after:hover:border-yellow-400 text-black">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

export default function Header() {
  return (
    <header className='justify-center flex gap-4 bg-branco-950 items-center fixed top-0 left-0 right-0 z-50'>
      <img src="logo2.png" alt="Logo do Cyber Games" className='m-2 mr-0 h-4' />
      <nav>
        <ul className='flex gap-4 font-thin tracking-wide mt-2 mb-2 text-xs sm:text-sm text-branco-300'>
          <li><a href='quem_somos.jsx' className='hover:text-branco-200'>Quem somos?</a></li>
          <li><a href="/contato" className='hover:text-branco-200'>Como participar?</a></li>
          <li>
          <button 
            type="button"
            className='hover:bg-verde-claro-400 invisible sm:visible absolute right-2 bg-branco-100 text-branco-950 px-2 py-[2.5px] rounded-md justify-self-center font-semibold text-xs'>
            SE INSCREVA
          </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
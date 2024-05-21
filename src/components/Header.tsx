import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='justify-center flex gap-4 bg-branco-950 items-center fixed top-0 left-0 right-0'>
      <img src="logo2.png" alt="Logo do Cyber Games" className='mt-2 mb-2 h-4' />
      <nav>
        <ul className='flex gap-4 font-thin tracking-wide mt-2 mb-2 text-sm text-branco-300'>
          <li><a href='quem_somos.jsx' className='hover:text-branco-200'>Quem somos?</a></li>
          <li><a href="/sobre" className='hover:text-branco-200'>Conheça nosso time</a></li>
          <li><a href="/contato" className='hover:text-branco-200'>Como participar?</a></li>
        </ul>
      </nav>
    </header>
  );
};

<button 
  type="button"
  className='absolute right-4 bg-verde-claro-400 text-branco-950 pl-2 pr-2 pt-1 pb-1 rounded-md justify-self-center'>
  SE INSCREVA
</button>

export default Header;

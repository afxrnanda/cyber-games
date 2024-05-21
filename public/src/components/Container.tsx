import React from 'react';

interface ContainerProps {
  children: any;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='bg-verde-claro-700'>
      {children}
    </div>
  );
};

export default Container;

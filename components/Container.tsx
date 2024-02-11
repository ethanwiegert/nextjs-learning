// components/Container.tsx
import React from 'react';

const Container: React.FC = ({ children }) => {
  return <div style={{ backgroundColor: '#D3D3D3' }} className="container mx-auto p-4">{children}</div>;
};

export default Container;

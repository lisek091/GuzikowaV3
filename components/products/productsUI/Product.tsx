import React from 'react';
import { useProductContext } from './ProductProvider';

export type ProductType = {
    name: string;
    description: string;
    image: string;
  };

const Product: React.FC = () => {
  const { selectedProduct } = useProductContext();

  if (!selectedProduct) {
    return null; 
  }

  const { name, description, image } = selectedProduct;

  return (
    <div className='grid grid-cols-1 items-center text-center'>
      <h1 className='text-4xl'>{name}</h1>
      <p>{description}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Product;
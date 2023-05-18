import React, { createContext, useState, useContext } from 'react';
import Product from './Product';

type Product = {
  name: string;
  description: string;
  image: string;
};

type ProductContextValue = {
  selectedProduct: Product | null;
  selectProduct: (product: Product | null) => void;
};

const ProductContext = createContext<ProductContextValue | undefined>(
  undefined
);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const selectProduct = (product: Product | null) => {
    setSelectedProduct(product);
  };

  const value: ProductContextValue = {
    selectedProduct,
    selectProduct,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
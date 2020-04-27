import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Product): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // TODO LOAD ITEMS FROM ASYNC STORAGE
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product: Product) => {
      const { id } = product;
      const productExists = products.find(prod => prod.id === id);
      const quantity = productExists ? productExists.quantity + 1 : 1;

      const newProduct = { ...product, quantity };

      if (productExists) {
        const newProducts = products.map(prod =>
          prod.id === id ? newProduct : prod,
        );

        setProducts(newProducts);
        console.log(products);
      } else {
        setProducts([...products, newProduct]);
        console.log(products);
      }
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
      const productInTheCart = products.map(prod =>
        prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod,
      );

      setProducts(productInTheCart);

      console.log(products);
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      // TODO DECREMENTS A PRODUCT QUANTITY IN THE CART
      const productIndex = products.findIndex(prod => prod.id === id);

      if (products[productIndex].quantity <= 1) {
        const productsFilter = products.filter(prod => prod.id !== id);

        setProducts(productsFilter);
      } else {
        const productInTheCart = products.map(prod =>
          prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod,
        );

        setProducts(productInTheCart);
        console.log(products);
      }
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };

// src/context/state.js
import { createContext, useContext, ReactNode, useState } from "react";

const CartContext = createContext({
  cant: 0,
  increment: (cant: number) => {},
  emptyCart: () => {},
});

export function AppWrapper({ children }: { children: ReactNode }) {
  const [cant, setCant] = useState<number>(0);

  const increment = (cantToAdd: number) => setCant((cant) => cant + cantToAdd);
  const emptyCart = () => setCant(0);

  return (
    <CartContext.Provider value={{ cant, increment, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}

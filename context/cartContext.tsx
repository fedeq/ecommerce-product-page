// src/context/state.js
import { createContext, useContext, ReactNode, useState } from "react";

const CartContext = createContext({ cant: 0, increment: (cant: number) => {} });

export function AppWrapper({ children }: { children: ReactNode }) {
  const [cant, setCant] = useState<number>(0);

  const increment = (cantToAdd: number) => setCant((cant) => cant + cantToAdd);

  return (
    <CartContext.Provider value={{ cant, increment }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}

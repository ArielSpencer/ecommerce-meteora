import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, SetCarrinho] = useState([]);
  return (
    <CarrinhoContext.Provider value={[carrinho, SetCarrinho]}>
      {children}
    </CarrinhoContext.Provider>
  )
}
// camada de dados de configuração
// precisamos disso para rastrear a cesta

import React, { createContext, useContext, useReducer } from "react";

// ESSA É A CAMADA DE DADOS
export const StateContext = createContext();

// CRIANDO PROVEDOR
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Usando dentro de um componente
export const useStateValue = () => useContext(StateContext);
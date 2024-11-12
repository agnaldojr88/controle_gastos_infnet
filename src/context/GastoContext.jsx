// src/context/GastoContext.jsx
import React, { createContext, useState } from 'react';
import axios from 'axios';

export const GastoContext = createContext();

export const GastoProvider = ({ children }) => {
  const [gastos, setGastos] = useState([]);

  const getGastos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/gastos');
      setGastos(response.data);
    } catch (error) {
      console.error("Erro ao buscar gastos", error);
    }
  };

  const addGasto = async (newGasto) => {
    try {
      const response = await axios.post('http://localhost:3000/gastos', newGasto);
      setGastos([...gastos, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar gasto", error);
    }
  };

  const updateGasto = async (id, updatedGasto) => {
    try {
      await axios.put(`http://localhost:3000/gastos/${id}`, updatedGasto);
      setGastos(gastos.map((gasto) => (gasto.id === id ? { ...gasto, ...updatedGasto } : gasto)));
    } catch (error) {
      console.error("Erro ao atualizar gasto", error);
    }
  };

  const deleteGasto = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/gastos/${id}`);
      setGastos(gastos.filter((gasto) => gasto.id !== id));
    } catch (error) {
      console.error("Erro ao excluir gasto", error);
    }
  };

  return (
    <GastoContext.Provider value={{ gastos, getGastos, addGasto, updateGasto, deleteGasto }}>
      {children}
    </GastoContext.Provider>
  );
};

// src/pages/AddGastoPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddGastoPage = () => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoGasto = { descricao, valor, categoria };
    axios.post('http://localhost:3000/gastos', novoGasto)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao adicionar gasto:', error);
      });
  };

  return (
    <div>
      <h1>Adicionar Gasto</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={descricao} 
          onChange={(e) => setDescricao(e.target.value)} 
          placeholder="Descrição"
        />
        <input 
          type="number" 
          value={valor} 
          onChange={(e) => setValor(e.target.value)} 
          placeholder="Valor"
        />
        <input 
          type="text" 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value)} 
          placeholder="Categoria"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddGastoPage;

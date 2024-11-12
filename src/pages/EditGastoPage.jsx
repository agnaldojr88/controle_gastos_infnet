// src/pages/EditGastoPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditGastoPage = () => {
  const { id } = useParams();
  const [gasto, setGasto] = useState({ descricao: '', valor: '', categoria: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/gastos/${id}`)
      .then(response => {
        setGasto(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar gasto:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/gastos/${id}`, gasto)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao editar gasto:', error);
      });
  };

  return (
    <div>
      <h1>Editar Gasto</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={gasto.descricao} 
          onChange={(e) => setGasto({ ...gasto, descricao: e.target.value })}
          placeholder="Descrição"
        />
        <input 
          type="number" 
          value={gasto.valor} 
          onChange={(e) => setGasto({ ...gasto, valor: e.target.value })}
          placeholder="Valor"
        />
        <input 
          type="text" 
          value={gasto.categoria} 
          onChange={(e) => setGasto({ ...gasto, categoria: e.target.value })}
          placeholder="Categoria"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditGastoPage;

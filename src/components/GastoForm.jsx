// src/components/GastoForm.jsx
import React, { useState, useEffect, useContext } from 'react';

import { GastoContext } from '../context/GastoContext';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';



const GastoForm = ({ gasto, setIsFormVisible }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const { addGasto, updateGasto } = useContext(GastoContext);

  useEffect(() => {
    if (gasto) {
      setDescricao(gasto.descricao);
      setValor(gasto.valor);
      setCategoria(gasto.categoria);
    }
  }, [gasto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gasto) {
      // Se existe um gasto a ser editado
      updateGasto(gasto.id, { descricao, valor, categoria });
    } else {
      // Se é para adicionar um novo gasto

      if(descricao != "")
        addGasto({ descricao, valor, categoria });
    }
    setIsFormVisible(false);
  };

  

  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
    <form onSubmit={handleSubmit}>


    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      

      <TextField id="outlined-basic" label="Descrição"
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          placeholder='Descrição'
        />

      <TextField id="outlined-basic" label="Valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
          placeholder='Valor em R$'
        />

      <TextField id="outlined-basic" label="Categoria"
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
          placeholder='Categoria'
        />


    </Box>



  <Grid container spacing={2}>
    <Grid size={4}>
      <Button type="submit" variant="contained">{gasto ? 'Atualizar' : 'Adicionar'}</Button>
    </Grid>

  </Grid>




      
    </form>
    </Box>
  );
};

export default GastoForm;

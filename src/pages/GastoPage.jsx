// src/pages/GastoPage.jsx
import React, { useEffect, useContext, useState } from 'react';
import { GastoContext } from '../context/GastoContext';
import GastoList from '../components/GastoList';
import GastoForm from '../components/GastoForm';  // Importar o formulário
import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const GastoPage = () => {
  const { gastos, getGastos, deleteGasto } = useContext(GastoContext);
  const [isFormVisible, setIsFormVisible] = useState(false);  // Estado para controlar a visibilidade do formulário
  const [gastoToEdit, setGastoToEdit] = useState(null);  // Para editar um gasto existente

  useEffect(() => {
    getGastos();
  }, [getGastos]);

  const handleDelete = (id) => {
    deleteGasto(id);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    setGastoToEdit(null);  // Limpar a edição ao abrir o formulário
  };

  const handleEdit = (gasto) => {
    setGastoToEdit(gasto);
    setIsFormVisible(true);
  };

  return (
    <div>


<Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Controle de gastos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>



    <br></br><br></br><br></br><br></br>
    

      <Button  variant="contained" onClick={toggleForm}>
        {isFormVisible ? 'Cancelar' : 'Adicionar Novo Gasto'}
      </Button >

      {isFormVisible && (
        <GastoForm gasto={gastoToEdit} setIsFormVisible={setIsFormVisible} />
      )}

      <GastoList gastos={gastos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default GastoPage;

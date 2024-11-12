// src/components/GastoList.jsx
import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const GastoList = ({ gastos, onDelete, onEdit }) => {
  return (
    <div>
      




      <br></br>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Descrição</TableCell>
              <TableCell align="center">Valor</TableCell>
              <TableCell align="center">Categoria</TableCell>
              <TableCell align="center">Edição</TableCell>
              <TableCell align="center">Exclusão</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gastos.map((gasto) => (
              <TableRow
                key={gasto.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {gasto.descricao}
                </TableCell>
                <TableCell align="center">{gasto.valor}</TableCell>
                <TableCell align="center">{gasto.categoria}</TableCell>
                <TableCell align="center"><Button variant="contained" onClick={() => onEdit(gasto)}>Editar</Button></TableCell>
                <TableCell align="center"><Button variant="contained" onClick={() => onDelete(gasto.id)}>Excluir</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>





    </div>
  );
};

export default GastoList;

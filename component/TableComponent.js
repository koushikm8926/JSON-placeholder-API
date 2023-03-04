import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableComponent = ({ data }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <TableContainer component={Paper} sx={{ width: isMobile ? '100%' : '50%', margin: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;

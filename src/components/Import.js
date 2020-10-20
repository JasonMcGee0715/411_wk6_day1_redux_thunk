import React from 'react'
import {
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Container,
} from '@material-ui/core';

const Import = (props) => {
    // fill out this component

    return (
        <div>
        <Button onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((car) => (
            <TableRow key={car.name}>
              <TableCell component="th" scope="row">
                {car.MakeId}
              </TableCell>
              <TableCell align="right">{car.MakeName}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>
    )
}

export default Import
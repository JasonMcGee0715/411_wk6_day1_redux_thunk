import React from "react";
import { MoreVert } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Menu,
  MenuItem,
} from "@material-ui/core";

const Import = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={props.fetchMakes} variant="contained" color="primary">
        Import
      </Button>
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
              <TableCell align="right">
                <MoreVert
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                ></MoreVert>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <DeleteIcon onClick={(idx) => props.deleteMake(idx)} />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Import;

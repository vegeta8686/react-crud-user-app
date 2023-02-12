import React, { useState } from "react";
import { getUsers, removeUser } from "../services/UserService";
import { useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  //calls the user list on component mounts
  useEffect(() => {
    fetch();
  }, []);

  //fetches all the users
  const fetch = async () => {
    const response = await getUsers();
    setUsers(response.data.response);
  };

 //delete the single user
  const deleteUser = async (id) => {
    await removeUser(id);
    fetch();
  };

  return (
    <div className="user">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row._id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Button component={Link} to={`/edit/${row._id}`}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => deleteUser(row._id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Users;

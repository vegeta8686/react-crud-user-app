import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/UserService";

const Add = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  //on input change update its value
  const onValueChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //on submit calls add user api and add user
  const submitData = async () => {
    await addUser(user);
    navigate("/");
  };

  //added margin top for form control
  const Control = styled(FormControl)`
    margin-top: 5px;
  `;
  return (
    <div className="add">
      <Typography variant="h4">Add User </Typography>
      <Control>
        <InputLabel>Name</InputLabel>
        <Input onBlur={(e) => onValueChanges(e)} name="name" defaultValue={user.name} />
      </Control>
      <Control>
        <InputLabel>Age</InputLabel>
        <Input onBlur={(e) => onValueChanges(e)} name="age" defaultValue={user.age} />
      </Control>
      <Button onClick={() => submitData()}>Submit</Button>
    </div>
  );
};

export default Add;

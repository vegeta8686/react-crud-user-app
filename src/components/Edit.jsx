import {
  FormControl,
  Input,
  InputLabel,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, updateUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";

const initialValue = {
  name: "",
  age: "",
  id: "",
};
const Edit = () => {
  const { id } = useParams();
  const [user, setUser] = useState(initialValue);
  const navigate = useNavigate();

  //calling single user data api on component mounts
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //getting all users list
  const fetchUser = async () => {
    const user = await getUser(id);
    setUser(user.data.response);
  };

  //changing the value of input fields
  const onValueChanges = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //submits the data after user clicked on submit
  const submitData = async () => {
    await updateUser(id, user);
    navigate("/");
  };

  //adds the margin top for form control
  const Control = styled(FormControl)`
    margin-top: 5px;
  `;

  return (
    <div className="edit">
      <Typography variant="h4">Edit User</Typography>
      <Control>
        <InputLabel>Name</InputLabel>
        <Input
          onBlur={(e) => onValueChanges(e)}
          name="name"
          defaultValue={user.name}
        />
      </Control>
      <Control>
        <InputLabel>Age</InputLabel>
        <Input
          onBlur={(e) => onValueChanges(e)}
          name="age"
          defaultValue={user.age}
        />
      </Control>
      <Button onClick={() => submitData()}>Submit</Button>
    </div>
  );
};

export default Edit;

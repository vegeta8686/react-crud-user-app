import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import {Link} from 'react-router-dom';

const Header = styled(AppBar)`
  background-color: #f50057;
`;
const P = styled(Typography)`
margin-left: 20px;
text-decoration: none;
color: #111111;
`;
const Navbar = () => {
  return (
    <div>
      <Header>
        <Toolbar>
          <P component={Link} to='/'>USERS</P>
          <P  component={Link} to='/add'>ADD</P>
        </Toolbar>
      </Header>
    </div>
  );
};

export default Navbar;

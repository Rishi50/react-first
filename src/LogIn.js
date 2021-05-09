import React, { useState } from "react";
import { auth } from "./firebase";
import { Grid, Paper, Avatar, TextField, Link} from '@material-ui/core'
import {useHistory} from "react-router-dom";
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import Button from '@material-ui/core/Button';


function Login() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const paperStyle= { padding: 20, height: '80vh', width: 280, margin: "20px auto"}
const avatarStyle={backgroundColor: 'green'}
const btnstyle={margin:'20px 0'}



  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, Password)
      .then((auth) => {
        history.push("/Success");
      })
      .catch((e) => {
        if (
          e.message ===
          "The password is invalid or the user does not have a password."
        ) {
          alert("Please check your credentials again");
        } else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          history.push("/Success");
          window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: "smooth",
          });
        } else {
          alert(e.message);
        }
      });
  };

  return (
    <Grid>

      <Paper elevation={10} style={paperStyle} >
        <Grid align='center'>
          <h3>!!Congratulations on sucessful!! SignUP</h3>
        <   Avatar style={avatarStyle}><LockTwoToneIcon/></Avatar>
            <h3>Welcome</h3>
            <h2>LogIn Form</h2>
        
        </Grid>

    

        
        <form>
          <center>
        <TextField  id="outlined-basic" label='Email' name='email' type='email' 
        
        placeholder='Enter email' onChange={(event) => setEmail(event.target.value)} fullWidth required
        
        />
        </center>

        <center>
                    <TextField id="outlined-basic" label='Password' name='Password' type='Password'
         placeholder='Enter Password' onChange={(event) => setPassword(event.target.value)} fullWidth required
         
         />
          </center>
            
          <center>
            <Button onClick={login} type="submit" color='primary' variant="contained" style={btnstyle} fullWidth>
              Log In
            </Button>
        </center>
          
        </form>
     
    </Paper>
    </Grid>
  );
}

export default Login;
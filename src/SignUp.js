import React from 'react'
import { Grid, Paper, Avatar, TextField, Link} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import {Form, Formik, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';





 




const SignUp=()=>{


 




  

const paperStyle= { padding: 20, height: '80vh', width: 280, margin: "20px auto"}
const avatarStyle={backgroundColor: 'green'}
const btnstyle={margin:'20px 0'}
const passwordRegExp =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const initialValues={
email:'',
Password:'',
Confirm_Password:'',
Remember:false

}





const validationSchema=Yup.object().shape({

email:Yup.string().email('please enter valid email ').required("Required"),
Password:Yup.string().min(8, "Minimum characters should be 8")
.matches(passwordRegExp,"Password must include at least a number and an alphabet").required("Required"),
Confirm_Password:Yup.string().oneOf([Yup.ref('Password')],"Password not matched").required("Required")

})
const onSubmit=(values,props)=>{

  console.log(values)
  setTimeout(()=>{
    props.resetForm()
    props.setSubmitting(false)
    },1500)
  console.log(props)

}
return (

    <Grid>

    <Paper elevation={10} style={paperStyle} >
        <Grid align='center'>

        <   Avatar style={avatarStyle}><LockTwoToneIcon/></Avatar>
            <h2>Registration Form</h2>
        
        </Grid>

      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {(props)=>(
          <Form >
              {console.log(props)}

        <Field as={TextField}  id="outlined-basic" label='Email' name='email' type='email' 
        
        placeholder='Enter email' fullwidth required 
        helperText={<ErrorMessage name='email'/>}
        />
        <Field as={TextField} id="outlined-basic" label='Password' name='Password' type='Password'
         placeholder='Enter Password'  fullwidth required
         helperText={<ErrorMessage name='Password'/>}
         />
        <Field as={TextField} id="outlined-basic" label='Confirm Password' name='Confirm_Password' type='password' 
          placeholder='Re-enter password'  fullwidth required
          helperText={<ErrorMessage name='Confirm_Password'/>} />
       
    <Button type='submit' color='primary' variant="contained" onClick={"/LogIn"} 
     style={btnstyle} fullWidth >Sign Up</Button>
         
          
          </Form>


      )}

      </Formik>
    
 
  

    </Paper>


    </Grid>





)


}



export default SignUp;
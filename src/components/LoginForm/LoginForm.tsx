
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, Container, Grid, TextField } from "@material-ui/core";
import Header from "../Header/Header";

interface Errors {
  email? : string;
  password? : string;
  apiResponse? : string;
}

export const LoginForm = (props : any) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
      const { name, value }  = e.target;
      setFormState(prevformState=> ({
          ...prevformState,
          [name]: value
      }));
  };
  const validation = (values : any) => {
    let errorsMessage: any={};
    if (!values.email) {
      errorsMessage.email= "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errorsMessage.email ="Email address is invalid";
    }
    if (!values.password) {
      errorsMessage.password="Password is required";
    } else if (values.password.length < 8) {
      errorsMessage.password= "Password must be 8 or more characters";
    }
    return errorsMessage;
  }
  const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    const validationResult  = validation(formState);
    setErrors(validationResult);
    if(Object.keys(validationResult).length === 0){
      // call api 
      // create token 
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post:  formState}),
      });
      const body = await response.json();
      
      const getResponse : any = {responseToPost: body };
      if(getResponse.responseToPost.error === false){
        props.setToken(getResponse.responseToPost);
      }else{
        setErrors({"apiResponse" :"Username or password is invalid"});
      }
    }
   
    // call an api 
  };
  //useState to persist form value as an object with default state
  //event handler onchange attach to both fields
  // validation 
  return (
    <Container maxWidth="xs">
    <Header /> 
    <form onSubmit={handleSubmit} >
      <Grid container spacing={1} 
>
        <Grid item xs={12} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Box pt={2}>
              <TextField fullWidth
                label="Email"
                name="email"
                size="small"
                value={formState.email}
                onChange={handleChange}
    
                variant="outlined" />
                {errors.email && (
                  <Box component="p" className="help is-danger">{errors.email}</Box>
                )}
                </Box>
            </Grid>
            <Grid item xs={12}>
            <Box>
              <TextField
                fullWidth
                label="Password"
                name="password"
                size="small"
                type="password"
                value={formState.password}
                variant="outlined"
                onChange={handleChange}
              />
              {errors.password && (
                  <Box component="p" className="help is-danger">{errors.password}</Box>
                )}
                </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" fullWidth type="submit" variant="contained">
            Log in
          </Button>
          {errors.apiResponse && (
                  <Box component="p" className="help is-danger">{errors.apiResponse}</Box>
                )}
        </Grid>
      </Grid>
    </form>
    </Container>
  );
};


export default LoginForm;
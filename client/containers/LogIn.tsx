import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { classicNameResolver } from "typescript";
import {TextField, Container, Typography, Box, FormControlLabel, Checkbox, Button} from '@mui/material';
import { borderRadius } from '@mui/system';




const useStyles = makeStyles({
    root: {
        backgroundColor: 'lavender',
        width: "300px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});


export const Login = () => {


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        //TODO: change this to POST to server/db
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    return(
        <div>
        
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            width: '400px',
            borderRadius: '5px',
        }}>

            <Typography component="h1" variant="h5" sx={{mt: 3}}>Please Sign-In</Typography>
            <Box component="form" onSubmit={handleSubmit} >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="email address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="password"
                    name="password"
                    autoComplete="password"
                    autoFocus
                />
                {/* <FormControlLabel 
                    control={<Checkbox value="remember" />}
                    label="Remember me"
                /> */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 4}}
                >
                    Submit
                </Button>
            </Box>
        </Container>

        <div id="g_id_onload"
           data-client_id="1079971895229-v12dtpclssbub49pombpe4nibp8h82g6.apps.googleusercontent.com"
           data-login_uri="http://localhost:3000/oauth/"
           data-auto_prompt="false">
        </div>
        <div className="g_id_signin"
           data-type="standard"
           data-size="large"
           data-theme="outline"
           data-text="sign_in_with"
           data-shape="rectangular"
           data-logo_alignment="left">
        </div>
        <div id="buttonDiv"></div> 
        </div>
    )
}

export default Login;
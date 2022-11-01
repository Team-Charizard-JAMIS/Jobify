
import {TextField, Container, Typography, Box, FormControlLabel, Checkbox, Button, Grid} from '@mui/material';
import { borderRadius } from '@mui/system';
import React, { useState } from 'react';

export const LogIn = () => {
    const [hasAccount, setHasAccount] = useState(true)


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const creds = {
            email: data.get('email'),
            password: data.get('password')
        }
        console.log((hasAccount)? 'This will log in' : 'This will sign up')
        //TODO: change this to POST to server/db
        console.log(creds);

    };

    // function logMeIn(e: React.SyntheticEvent) {
    //     e.preventDefault();
    //     axios
    //       .post('/userAPI/login', {
    //         email,
    //         plainPassword: password,
    //       })
    //       .then((res) => {
    //         if (res.status === 200) {
    //           setUser(res.data);
    //           navigate('/home');
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         if (err.response.status === 401) {
    //           setError(
    //             'Error: Invalid email address and/or password. Please try again.'
    //           );
    //         } else {
    //           setError(`status: ${err.response.status} , ${err.response.data}`);
    //         }
    //       });
    //   }


    return(

        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'lavender',
            width: '400px',
            borderRadius: '5px',
        }}>

            <Typography component="h1" variant="h5" sx={{mt: 3}}>{(hasAccount) ? <a>Log In</a> : <a>Sign Up</a>}</Typography>
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
                    type='password'
                    autoComplete="current-password"
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
                    {(hasAccount)? <a>Log in</a> : <a>Sign up</a>}
                </Button>
            </Box>
            <div>
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

            <Box>
                <Button onClick={() => setHasAccount(!hasAccount)}>
                    {(hasAccount) ? <a>Don't have an account? Sign Up</a> : <a>Have an account? Sign In</a>}            
                </Button>
            </Box>
        </Container>
    )
}

export default LogIn;
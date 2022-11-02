
import {TextField, Container, Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react';

export const LogIn = (props: any) => {
    //const [hasAccount, setHasAccount] = useState(true);
    let hasAccount = props.hasAccount

    return(
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lavender',
            width: '400px',
            borderRadius: '5px',
        }}>

            <Typography component="h1" variant="h5" sx={{mt: 3}}>{(hasAccount) ? <a>Log In</a> : <a>Sign Up</a>}</Typography>
            <Box component="form" onSubmit={props.handleSubmit} >
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
                <Button onClick={() => props.setHasAccount(!hasAccount)}>
                    {(hasAccount) ? <a>Don't have an account? Sign Up</a> : <a>Have an account? Log In</a>}            
                </Button>
            </Box>
        </Container>
    )
}

export default LogIn;
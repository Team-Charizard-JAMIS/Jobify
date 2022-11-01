import {TextField, Container, Typography, Box, FormControlLabel, Checkbox, Button} from '@mui/material';
import { borderRadius } from '@mui/system';
import React from 'react';

export const LogIn = () => {


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
    )
}


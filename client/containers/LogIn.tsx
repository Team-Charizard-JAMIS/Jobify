import { FormControl, InputLabel, Input, Container, TextField, Box, Checkbox, Typography} from "@material-ui/core"
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { classicNameResolver } from "typescript";
import { FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'lavender',
        width: "300px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});


const Login = () => {
    const classes = useStyles();

        
    const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        });
    };

    return(
        <Container className = {classes.root}>

            <Typography component="h1" variant="h5">Please Sign-In</Typography>
            <Box component="form" onSubmit={handleSumbit} >
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
                <FormControlLabel 
                    control={<Checkbox value="remember" />}
                    label="Remember me"
                />
                {/* <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 4}}
                > */}
                    Submit
                </Button>
            </Box>
        </Container>
    )

}

export default Login;
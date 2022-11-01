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

// const client = new OAuth2Client("1079971895229-v12dtpclssbub49pombpe4nibp8h82g6.apps.googleusercontent.com");
// async function verify() {
//   const ticket = await client.verifyIdToken({
//       idToken: 123,
//       audience: "1079971895229-v12dtpclssbub49pombpe4nibp8h82g6.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
//       // Or, if multiple clients access the backend:
//       //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   const payload = ticket.getPayload();
//   const userid = payload['sub'];
//   // If request specified a G Suite domain:
//   // const domain = payload['hd'];
// }
// verify().catch(console.error);



    return(
        <div> The login will be here once fixed
      <div id="g_id_onload"
         data-client_id="1079971895229-v12dtpclssbub49pombpe4nibp8h82g6.apps.googleusercontent.com"
         data-login_uri="http://localhost:3000/api/"
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
        // <Container className = {classes.root}>

        //     <Typography component="h1" variant="h5">Please Sign-In</Typography>
        //     <Box component="form" onSubmit={handleSumbit} >
        //         <TextField
        //             margin="normal"
        //             required
        //             fullWidth
        //             id="email"
        //             label="email address"
        //             name="email"
        //             autoComplete="email"
        //             autoFocus
        //         />
        //         <TextField
        //             margin="normal"
        //             required
        //             fullWidth
        //             id="password"
        //             label="password"
        //             name="password"
        //             autoComplete="password"
        //             autoFocus
        //         />
        //         <FormControlLabel 
        //             control={<Checkbox value="remember" />}
        //             label="Remember me"
        //         />
        //         {/* <Button
        //             type="submit"
        //             fullWidth
        //             variant="contained"
        //             sx={{mt: 3, mb: 4}}
        //         > */}
        //             Submit
        //         </Button>
        //     </Box>
        // </Container>
        
    )

}

export default Login;
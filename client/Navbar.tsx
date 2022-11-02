import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar } from '@material-ui/core'
import { Container, CssBaseline, Toolbar, Typography, Box, Button} from '@mui/material'

const Navbar = (props: any) => {

    const lStyle={
        color: 'white',
        textDecoration: 'none'
    }
    const bStyle={
        color: 'white'
    }
    return (
        <AppBar position='sticky'>
            <CssBaseline>
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <Typography
                    variant="h6"
                    component="a"
                    href='/'
                    sx={{
                        mr: 2,
                        display: { md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 300,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                    >
                        Job App Status Tracker
                    </Typography>
                    <Box sx={{ justifyContent:'flex-end', flexGrow: 1, display: { md: 'flex' } }}>
                      <Button><Link to='/' style={lStyle}>Home</Link></Button>
                      <Button><Link to='/about' style={lStyle}>About</Link></Button>
                      {/* <Button><Link to='/login' style={lStyle}>Log In</Link></Button> */}
                      <Button onClick={props.handleLogOut}sx={bStyle}>Log Out</Button>
                    </Box>
                </Toolbar>
            </Container>                
            </CssBaseline>

        </AppBar>
        // <div>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link to="/">Dashboard</Link>
        //             </li>
        //             <li>
        //                 <Link to="/about">About</Link>
        //             </li>
        //             <li>
        //                 <Link to="/login">Login</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
    )
}

export default Navbar;
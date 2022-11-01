import React from 'react';
import { Button, Typography, Card, TextField } from '@mui/material';
const ApplicationForm = () => {
    //front end pathing
    return (
        <Card>
            <Typography>Application Form</Typography>
            <form style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                <TextField
                    id="outlined-basic"
                    label="Application Name"
                    variant="outlined"
                    color="secondary"
                />
                <TextField
                    id="outlined-basic"
                    label="Application Id"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="Application Date"
                    variant="outlined"
                />
                <TextField
                    id="outlined-basic"
                    label="User Id"
                    variant="outlined"
                />
                <Button>Click me to submit</Button>
            </form>
        </Card >
    )
}

export default ApplicationForm;

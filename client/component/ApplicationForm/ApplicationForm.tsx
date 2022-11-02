import React from 'react';
import { Button, Typography, Card, TextField } from '@mui/material';

interface ApplicationFormProps {
    applied: (event: any) => void;
    setAppName: any;
}
const ApplicationForm = () => {
    // const ApplicationForm = (props: ApplicationFormProps) => {
    //     const applied = props.applied;
    //     const setAppName = props.setAppName;

    // const handleInputChange = (e: any) => {
    //     const { value: string } = e.target;
    //     setAppName({
    //         ApplicationName: value,
    //     });
    // };

    return (
        <div> hello</div>
        // <form onSubmit={applied}>
        //     <TextField
        //         id="outlined-basic"
        //         label="User Id"
        //         variant="outlined"
        //         type="text"
        //         onChange={handleInputChange}
        //     />
        //     <Button type='submit'>Click me to submit</Button>
        // </form>
    )
}

export default ApplicationForm;

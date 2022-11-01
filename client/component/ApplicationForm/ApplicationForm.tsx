import React from 'react';
import { Button, Typography, Card, TextField } from '@mui/material';

interface ApplicationFormProps {
    applied: (event: any) => void;
    setAppName: Dispatch<SetStateAction<string>>;
}

const ApplicationForm = (props: ApplicationFormProps) => {
    const applied = props.applied;
    const setAppName = props.setAppName;

    const handleInputChange = (e: any) => {
        const { value: string } = e.target;
        setAppName({
            ApplicationName: value,
        });
    };


    //front end pathing

    // const postApplication = (e) => {
    //     fetch('/applications', {
    //         e.tonSubmit={applied} arget.value
    //     })
    // }

    return (
        <Card>

                    type="text"
                    onChange={handleInputChange}
                />  label="Application Date"
                    varitype='submit'                />
                <TextField
                    id="outlined-basic"
                    label="User Id"
                    variant="outlined"
                />
                <Button onSubmit={() => applied()}>Click me to submit</Button>
            </form>
        </Card >
    )
}

export default ApplicationForm;

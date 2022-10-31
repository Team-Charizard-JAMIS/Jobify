import * as React from "react";
import { App } from '../../Types/applicationTypes';
import { Button } from '@mui/material';

type AppBoxProps = {
    app: App,
    key: string
    interviewed: (appID: number) => void
}

const ApplicationBox = (props: AppBoxProps) => {
    const name = props.app.appName;
    const date = props.app.appDate;
    const addInterview = props.interviewed;

    return ( 
        <div className='applicationsTable'>
            <div>{date}</div>
            <div>{name}</div>
            <div><Button onClick={() => addInterview(props.app.id)}> + </Button></div>
        </div>
     );
}
 
export default ApplicationBox;
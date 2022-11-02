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
        //previously it was all divs
        <tr className='applicationsTable'>
            <th>{date}</th>
            <th>{name}</th>
            <th><Button onClick={() => addInterview(props.app.id)}> + </Button></th>
        </tr>
     );
}
 
export default ApplicationBox;
import * as React from "react";
import { App } from '../../Types/applicationTypes';
import { Button } from '@mui/material';

type AppBoxProps = {
    app: App,
    key: string
    interviewed: (appName: string) => void
}

const ApplicationBox = (props: AppBoxProps) => {
    const name = props.app.appname;
    const date = props.app.appdate;
    const interviewed = props.interviewed;

    return (
        //previously it was all divs
        <tr className='applicationsTable'>
            <th>{date}</th>
            <th>{name}</th>
            <th><Button onClick={() => interviewed(name)}> + </Button></th>
        </tr>
    );
}

export default ApplicationBox;
import React, { useState } from 'react';
import { Button } from '@mui/material';
import ApplicationBox from './applicationbox';
import { App } from '../../Types/applicationTypes';
import './applicationStyles.css';

interface ApplicationProps {
    applications: Array<App>,
    interviewed: (appID: number) => void
}

const Application = (props: ApplicationProps) => {
    const applications = props.applications;
    const interviewed = props.interviewed;
    const apps = [];
    for (let i = 0; i < applications.length; i++) {
        apps.push(<ApplicationBox app={applications[i]} key={'app' + i} interviewed={interviewed} />)
    }
    //end of creating individual app components

    return (
        <div>
            <h1>Application</h1>

            <div className='applyContainer'>
                <h1>Applied</h1>
                <Button className='addApp'>+</Button>
            </div>
            <div className='applicationsTable'>
                <div>Date Applied</div>
                <div>Application Name</div>
                <div>Interviewed?</div>
            </div>
            {apps}
        </div>
    )
}

export default Application;

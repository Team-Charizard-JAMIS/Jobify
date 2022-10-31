import React, { useState } from 'react';
import { Button } from '@mui/material';
import ApplicationBox from './applicationbox';


const Application = ({ applications }) => {
    // const [apps, setApps] = useState(applications)
    const apps = [];
    for (let i = 0; i < applications.length; i++) {
        apps.push(<ApplicationBox app={applications[i]} key={'app' + i} />)
    }//end of creating individual app components

    return (
        <div>
            <h1>Application</h1>

            <div className='applyContainer'>
                <h1>Applied</h1>
                <Button className='addApp'>+</Button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Application;

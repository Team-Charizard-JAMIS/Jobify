import React, { useState } from 'react';
import { Button } from '@mui/material';
import ApplicationBox from './applicationbox';
import { App } from '../../Types/applicationTypes';
import Modal from "../Modal/Modal";
import './applicationStyles.css';

interface ApplicationProps {
    applications: Array<App>,
    interviewed: (appName: string) => void
    applied : (name: string) => void
}

const Application = (props: ApplicationProps) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const { applications, interviewed, applied } = props;
    
    const apps = [];
    for (let i = 0; i < applications.length; i++) {
        apps.push(<ApplicationBox app={applications[i]} key={'app' + i} interviewed={interviewed} />)
    }
    return (
        <div>
            <h1>Application</h1>

            <div className='applyContainer'>
                <h1>Applied</h1>
                <button
                    className="openModalBtn"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    Add Application
                </button>

                {modalOpen && <Modal setModalOpen={setModalOpen} applied={applied} />}
            </div>
           <table className='applicationsTable'>
                <tbody>
            <tr>
                <th>Date Applied</th>
                <th>Application Name</th>
                <th>Interviewed?</th>
            </tr>
                {apps}
                </tbody>
           </table>
           
           
            {/* <div className='applicationsTable'>
                <div>Date Applied</div>
                <div>Application Name</div>
                <div>Interviewed?</div>
            </div> */}
            {/* {apps} */}
        </div>
    )
}

export default Application;

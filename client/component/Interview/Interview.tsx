import React, { useState } from 'react';
import InterviewBox from './interviewBox';
import { InterviewType } from '../../Types/interviewTypes';
import './interviewStyles.css';

interface InterviewProps {
    interviews: Array<InterviewType>,
    offered: (interviewName: string) => void
}

const Interview = (props: InterviewProps) => {
    const interviews = props.interviews;
    const offered = props.offered;
    const rows = [];
    for (let i = 0; i < interviews.length; i++) {
        rows.push(<InterviewBox interview={interviews[i]} key={'interview' + i} offered={offered} />)
    }//end of creating individual app components

    return (
        <div>
            <h1>Interviews</h1>

            <div className='applyContainer'>
                <h1>In Progress</h1>
            </div>
            {/* <table className='interviewTable'>
                <tbody>
                <tr>
                    <th>Interview Date</th>
                    <th>Company Name</th>
                    <th>Offer?</th>
                </tr>
                {rows}
                </tbody>
            </table> */}


             <div className='interviewTable'>
                <div>Interview Date</div>
                <div>Company Name</div>
                <div>Offer?</div>
            </div>
            {rows}
        </div>
    )
}

export default Interview;

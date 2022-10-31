import React, { Component, useState } from 'react';
import { Card } from '@mui/material'


const Interview = () => {
    const [interviewInformation, setInterviewInformation] = useState<any[]>(
        [
            {
                companyName: 'Apple',
                interviewResult: true,
                interviewNotes: 'this company ROCKS'
            },
            {
                companyName: 'Amazon',
                interviewResult: false,
                interviewNotes: 'this company sucks'
            }
        ])

    return (
        <div>

            <h2>Interviews</h2>
            {
                interviewInformation.map((ele, i) => {
                    <Card key='Key ' i >
                        Company Name: {ele.companyName}
                    </Card>
                })
            }
        </div >
    )
}

export default Interview;

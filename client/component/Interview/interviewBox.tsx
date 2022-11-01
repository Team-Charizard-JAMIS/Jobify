import * as React from "react";
import { InterviewType } from '../../Types/interviewTypes';
import { Button } from '@mui/material';

type InterviewBoxProps = {
    interview: InterviewType,
    key: string
    offered: (interviewID: number) => void
}

const InterviewBox = (props: InterviewBoxProps) => {
    const name = props.interview.interviewName;
    const date = props.interview.interviewDate;
    const addOffer = props.offered;

    return (
        <div className='interviewTable'>
            <div>{date}</div>
            <div>{name}</div>
            <div><Button onClick={() => addOffer(props.interview.interviewId)}> + </Button></div>
        </div>
    );
}

export default InterviewBox;
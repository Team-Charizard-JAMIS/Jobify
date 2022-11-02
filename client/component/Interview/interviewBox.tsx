import * as React from "react";
import { InterviewType } from '../../Types/interviewTypes';
import { Button } from '@mui/material';

type InterviewBoxProps = {
    interview: InterviewType,
    key: string
    offered: (interviewID: number) => void
}

const InterviewBox = (props: InterviewBoxProps) => {
    const name = props.interview.interviewname;
    const date = props.interview.interviewdate;
    const addOffer = props.offered;

    return (
        <tr className='interviewTable'>
        <th>{date}</th>
        <th>{name}</th>
        <th><Button onClick={() => addOffer(props.interview.interviewId)}> + </Button></th>
    </tr>


        // <div className='interviewTable'>
        //     <div>{date}</div>
        //     <div>{name}</div>
        //     <div><Button onClick={() => addOffer(props.interview.interviewId)}> + </Button></div>
        // </div>
    );
}

export default InterviewBox;
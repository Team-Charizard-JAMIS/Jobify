import * as React from "react";
import { OfferType } from '../../Types/offerTypes';

type OfferBoxProps = {
    offer: OfferType,
    key: string
}

const OfferBox = (props: OfferBoxProps) => {
    const name = props.offer.offername;
    const date = props.offer.offerdate;
    const result = props.offer.result;

    return (
        <div className='interviewTable'>
            <div>{date}</div>
            <div>{name}</div>
            <div>{result ? 'Yes' : 'No'}</div>
        </div>
    );
}

export default OfferBox;
import React, { useState } from 'react';
import OfferBox from './offerBox';
import { OfferType } from '../../Types/offerTypes';
import './offerStyles.css';

interface OfferProps {
    offers: Array<OfferType>
};

const Offer = (props: OfferProps) => {
    const offers = props.offers;
    // const offered = props.offered;
    const offerResult = [];
    for (let i = 0; i < offers.length; i++) {
        //props to OfferBox is an array containing the information of offerName, offerDate, and results.
        offerResult.push(<OfferBox offer={offers[i]} key={'offer' + i} />)
    }

    return (
        <div>
            <h1>Offers</h1>

            <div className='offerContainer'>
                <h1>Done</h1>
            </div>
            <div className='offerTable'>
                <div>Interview Date</div>
                <div>Company Name</div>
                <div>Offer?</div>
            </div>
            {offerResult}
        </div>
    )
}

export default Offer;

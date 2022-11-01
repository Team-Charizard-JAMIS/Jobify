import React, { useEffect, useState } from 'react';
import Application from '../component/application/application'
import Interview from '../component/interview/interview'
import Offer from '../component/Offer/offer';
import { App } from '../Types/applicationTypes';
import { InterviewType } from '../Types/interviewTypes';
import { OfferType } from '../Types/offerTypes';

const MainContainer = () => {
  // const [apps, setApps] = useState([]);
  // const [interviews, setInterviews] = useState([]);
  const apps: App[] = [
    { id: 1, appName: 'Spotify', appDate: 'Date.now()', user_id: 1 },
    { id: 2, appName: 'Discord', appDate: 'Date.now()', user_id: 1 }
  ]

  const interviews: InterviewType[] = [
    { user_id: 1, interviewId: 1, interviewName: 'Spotify', interviewDate: '10/31/2022' }
  ]

  const offers: OfferType[] = [
    { user_id: 1, offerID: 1, offerName: 'Spotify', offerDate: '11/1/2022', result: true }
  ]

  useEffect(() => {
    // getInterviews();
  }, [])

  const interviewed = (appID: number) => {
    fetch('/interview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ appID })
    })
      .then(res => res.json())
      .then(data => {

      })
      .catch((err) => {
        console.log('interviewed Post method error front end', err);
      })
  }

  const offered = (interviewID: number) => {
    fetch('/offer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ interviewID })
    })
      .then(res => res.json())
      .then(data => {

      })
      .catch((err) => {
        console.log('offer Post method error front end', err);
      })
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <Application applications={apps} interviewed={interviewed} />
      <Interview interviews={interviews} offered={offered} />
      <Offer offers={offers} />
    </div>
  )
}

export default MainContainer;

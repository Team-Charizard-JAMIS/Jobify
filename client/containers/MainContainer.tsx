import React, { useEffect, useState } from 'react';
import Application from '../component/application/application';
import Interview from '../component/interview/interview';
import LogIn from './LogIn';
import Offer from '../component/Offer/offer';
import { App } from '../Types/applicationTypes';
import { InterviewType } from '../Types/interviewTypes';
import { OfferType } from '../Types/offerTypes';
import ApplicationForm from '../component/ApplicationForm/ApplicationForm'
// import Results from './../component/results'

const MainContainer = () => {
  const [apps, setApps] = useState<Array<App>>([
    { id: 1, appName: 'Spotify', appDate: String(Date.now()), user_id: 1 },
    { id: 2, appName: 'Amazon', appDate: String(Date.now()), user_id: 1 },
    { id: 3, appName: 'Youtube', appDate: String(Date.now()), user_id: 1 },
    { id: 4, appName: 'Spotify', appDate: String(Date.now()), user_id: 2 },
    { id: 5, appName: 'LinkedIn', appDate: String(Date.now()), user_id: 2 },
    { id: 6, appName: 'Chevron', appDate: String(Date.now()), user_id: 2 }
  ]);

  const [interviews, setInterviews] = useState<Array<InterviewType>>([
    { user_id: 1, interviewId: 1, interviewName: 'Spotify', interviewDate: '10/31/2022' },
    { user_id: 1, interviewId: 2, interviewName: 'Amazon', interviewDate: '10/31/2022' },
    { user_id: 1, interviewId: 3, interviewName: 'Youtube', interviewDate: '11/1/2022' },
    { user_id: 2, interviewId: 4, interviewName: 'Spotify', interviewDate: '10/30/2022' },
    { user_id: 2, interviewId: 5, interviewName: 'LinkedIn', interviewDate: '10/31/2022' },
    { user_id: 2, interviewId: 6, interviewName: 'Chevron', interviewDate: '11/1/2022' }
  ])

  const offers: OfferType[] = [
    { user_id: 1, offerID: 1, offerName: 'Spotify', offerDate: '11/1/2022', result: true },
    { user_id: 2, offerID: 2, offerName: 'Chevron', offerDate: '11/2/2022', result: true }
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
      <ApplicationForm />
      <Application applications={apps} interviewed={interviewed} />
      <Interview interviews={interviews} offered={offered} />
      <Offer offers={offers} />
    </div>
  )
};

export default MainContainer;

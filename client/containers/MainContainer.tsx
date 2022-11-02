import React, { useEffect, useState } from 'react';
import Application from '../component/application/application';
import Interview from '../component/interview/interview';
import LogIn from './LogIn';
import Offer from '../component/Offer/offer';
import { App } from '../Types/applicationTypes';
import { InterviewType } from '../Types/interviewTypes';
import { OfferType } from '../Types/offerTypes';
import { getApplicants } from '../controllers/api'
// import Results from './../component/results'

<<<<<<< HEAD
const MainContainer = () => {
  const [appName, setAppName] = useState('');
=======
const MainContainer = (props:any) => {
  let loggedIn =  props.loggedIn

>>>>>>> matthew
  const [apps, setApps] = useState<Array<App>>([
    { id: 1, appName: 'Spotify', appDate: String(Date.now()), user_id: 1 },
    { id: 2, appName: 'Amazon', appDate: String(Date.now()), user_id: 1 },
    { id: 3, appName: 'Youtube', appDate: String(Date.now()), user_id: 1 },
    { id: 4, appName: 'Spotify', appDate: String(Date.now()), user_id: 2 },
    { id: 5, appName: 'LinkedIn', appDate: String(Date.now()), user_id: 2 },
    { id: 6, appName: 'Chevron', appDate: String(Date.now()), user_id: 2 }
  ]);
  const [fetchApps, setFetchApps] = useState<boolean>(true);

  const [interviews, setInterviews] = useState<Array<InterviewType>>([
    { user_id: 1, interviewId: 1, interviewName: 'Spotify', interviewDate: '10/31/2022' },
    { user_id: 1, interviewId: 2, interviewName: 'Amazon', interviewDate: '10/31/2022' },
    { user_id: 1, interviewId: 3, interviewName: 'Youtube', interviewDate: '11/1/2022' },
    { user_id: 2, interviewId: 4, interviewName: 'Spotify', interviewDate: '10/30/2022' },
    { user_id: 2, interviewId: 5, interviewName: 'LinkedIn', interviewDate: '10/31/2022' },
    { user_id: 2, interviewId: 6, interviewName: 'Chevron', interviewDate: '11/1/2022' }
  ]);
  const [fetchInterviews, setFetchInterviews] = useState<boolean>(true);

  const [offers, setOffers] = useState<Array<OfferType>>([
    { user_id: 1, offerID: 1, offerName: 'Spotify', offerDate: '11/1/2022', result: true },
    { user_id: 2, offerID: 2, offerName: 'Chevron', offerDate: '11/2/2022', result: true }
  ]);
  const [fetchOffers, setFetchOffers] = useState<boolean>(true);

  // const getApplications = async (): Promise<App[]> => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/applications')
  //   }
  //   catch (error: any) {
  //     return error;
  //   }
  // };

  const getInterviews = () => {
    fetch('/interviews')
      .then((res) => res.json())
      .then((data) => {
        setInterviews(data);
      })
      .catch((err) => {
        console.log('Frontend Interviews get error', err);
      });
  }//end of getInterviews

  const getOffers = () => {
    fetch('/offers')
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
      })
      .catch((err) => {
        console.log('Frontend Offers get error', err);
      });
  }//end of getOffers

  // useEffect(() => {
  //   getApplications();
  // }, [fetchApps])

  // useEffect(() => {
  //   getInterviews();
  // }, [fetchInterviews])

  // useEffect(() => {
  //   getOffers();
  // }, [fetchOffers])

  const applied = (name: string) => {
    const appName = name;
    fetch('/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ appName })
    })
      .then(res => res.json())
      .then(data => {
        console.log('application posted success', data);
        const fetching = fetchApps;
        setFetchApps(!fetching);
      })
      .catch((err) => {
        console.log('Application Post method error front end', err);
      })
  }

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
        console.log('interview posted success', data);
        const fetching = fetchInterviews;
        setFetchInterviews(!fetching);
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
        console.log('offer posted success', data);
        const fetching = fetchOffers;
        setFetchOffers(!fetching);
      })
      .catch((err) => {
        console.log('offer Post method error front end', err);
      })
  }

  return (
<<<<<<< HEAD
    <div>
      <h2>Dashboard</h2>
      <button onClick={(e) => getApplicants()}> Hello</button >
      <LogIn />
      <Application applications={apps} interviewed={interviewed} applied={applied} />
      <Interview interviews={interviews} offered={offered} />
      <Offer offers={offers} />
    </div >
=======
    (!loggedIn) ? 
      <LogIn 
        handleSubmit={props.handleSubmit} 
        hasAccount={props.hasAccount} 
        setHasAccount={props.setHasAccount} 
      /> :        
      <div>
        <h2>Dashboard</h2>
        <ApplicationForm />
        <Application applications={apps} interviewed={interviewed} />
        <Interview interviews={interviews} offered={offered} />
        <Offer offers={offers} />
      </div>  
>>>>>>> matthew
  )
};

export default MainContainer;
